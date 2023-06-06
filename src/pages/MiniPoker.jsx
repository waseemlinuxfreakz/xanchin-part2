import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {socket} from '../services/minipoker';
import { userAccount, sendTransaction, updateJackpot} from '../web3/testnet'

import Header from '../components/MiniPoker/Header';
import GameResult from '../components/MiniPoker/GameResult';
import PokerReward from '../components/MiniPoker/PokerReward';

// {id: '1', bet_amount: '1.0000 DIME', jackpot: '2000.4400 DIME', rake_percent: 3.5999999046325684, jackpot_percent: 2}

function MiniPoker() {
    const cNameOriginal = {
        0 : "dimeBtn",
        1: "dimeBtn",
        2: "dimeBtn"
    };
    const [side, setSide] = useState(0);
    const [cName, setCName] = useState({
        0 : "dimeBtn active",
        1: "dimeBtn",
        2: "dimeBtn"
    });
    const [status, setStatus] = useState("START");
    const [auto, setAuto] = useState(false);

    const [result, setResult] = useState();
    const [jackpot, setJackpot] = useState(['0 DIME', '0 DIME' , '0 DIME']);
    const [amount, setAmount] = useState();

    function chooseSide(value) {
        setAuto(false);
        let temp = cNameOriginal;
        temp[value] = "dimeBtn active";
        setCName(temp);
        setSide(value);
        if (value === 0) setAmount(0.5);
        if (value === 1) setAmount(1);
        if (value === 2) setAmount(5);
    }

    function openCard (card) {
        if (card) return    <div key={v4()} className="col">
                                <div className="pokerCardItem">
                                <img src={"/static/media/poker_cards/" + card.value + "_" + card.suit[0].toUpperCase() + card.suit.substring(1) + ".svg"} alt="HILO Xanh Chin, xanhchin.io" />
                                </div>
                            </div>
        return <></>
    }

    function spin () {
        //console.log(amount);
        // console.log("SPIN");
        setStatus("ROLL");
        const transact = {
            actions: [{
              account: process.env.REACT_APP_TOKENCONTRACT,
              name: 'transfer',
              authorization: [{
                actor: userAccount,
                permission: 'active',
              }],
              data: {
                from: userAccount,
                to: process.env.REACT_APP_SCMINIPOKER,
                quantity:  parseFloat(amount).toFixed(process.env.REACT_APP_TOKENPRECISION) + " " + process.env.REACT_APP_TOKENSYMBOL,
                memo: 'play;' + side,
              },
            }]
        };
        sendTransaction(transact);
        //console.log(transact);
    } // <GameResult/>

    function autoSpin () {
        console.log("auto spin");
        spin();
        setAuto(true);
    }

    function stopSpin () {
        setAuto(false);
        console.log("stop auto spin");
    }

    useEffect(() => {

        const interval = setInterval(() => {
            if (auto) spin();
        }, 5000);

        console.log("RUNNING UPDATE JACKPOT 1");
        updateJackpot(process.env.REACT_APP_SCMINIPOKER, (result) => 
            setJackpot([result.rows[0].jackpot, result.rows[1].jackpot, result.rows[2].jackpot])
        );

        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            console.log("args[0]: ", args[0]);
            setResult(args[0].result);
            setStatus("STOP");
        });

        socket.on('JACKPOT', (...args) => {
            let temp = jackpot;
            temp[args[0].id] = args[0].jackpot;
            setJackpot(temp);
            //console.log("MiniPoker: JACKPOT");
            //console.log(args[0]);
        });
        
        return () => {
          socket.off('RESULT');
          socket.off('JACKPOT');
          clearInterval(interval);
        };
    }, [auto]);

    if (status === "START")
    return ( 
        <div className='PageWraper pokerRewardWraper'>
            <Header/>
            
            <section className="poker_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="poker_box_area">
                                <div className="poker_box">
                                    <div className="poker_title beatRankg">Jackpot : {jackpot[side]}</div>
                                    <div className="poker_cards row">
                                        {result ? 
                                        result.map(card => openCard(card)) : 
                                        <>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                        </>
                                        }
                                        {}
                                    </div>
                                    <div className="poker_dimeBtn">
                                        <div className="row">
                                            <div className="col">
                                                <button onClick={() => chooseSide(0)} type='button' className={cName[0]}>0.5 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button onClick={() => chooseSide(1)} type='button' className={cName[1]}>1 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button onClick={() => chooseSide(2)} type='button' className={cName[2]}>5 DIME</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="poker_Spin_btns dualBtn">
                                    <a onClick={() => spin()} className='BlueBtn'>Spin</a>
                                    { auto ? 
                                        <a onClick={() => stopSpin()} className='RedBtn'>STOP</a> :
                                        <a onClick={() => autoSpin()} className='RedBtn'>Auto Spin</a>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <PokerReward/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );  else if (status === "STOP")
    return ( 
        <div className='PageWraper pokerRewardWraper'>
            <Header/>
            
            <section className="poker_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="poker_box_area">
                                <div className="poker_box">
                                    <div className="poker_title beatRankg">Jackpot : {jackpot[side]}</div>
                                    <div className="poker_cards row">
                                        {result ? 
                                        result.map(card => openCard(card)) : 
                                        <>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pokerCardItem">
                                                    
                                                </div>
                                            </div>
                                        </>
                                        }
                                        {}
                                    </div>
                                    <div className="poker_dimeBtn">
                                        <div className="row">
                                            <div className="col">
                                                <button onClick={() => chooseSide(0)} type='button' className={cName[0]}>0.5 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button onClick={() => chooseSide(1)} type='button' className={cName[1]}>1 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button onClick={() => chooseSide(2)} type='button' className={cName[2]}>5 DIME</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="poker_Spin_btns dualBtn">
                                    <a onClick={() => spin()} className='BlueBtn'>Spin</a>
                                    { auto ? 
                                        <a onClick={() => stopSpin()} className='RedBtn'>STOP</a> :
                                        <a onClick={() => autoSpin()} className='RedBtn'>Auto Spin</a>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <PokerReward/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );  else 
    return ( 
        <div className='PageWraper pokerRewardWraper'>
            <Header/>
            
            <section className="poker_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="poker_box_area">
                                <div className="poker_box">
                                    <div className="poker_title beatRankg">Jackpot : {jackpot[side]}</div>
                                    <div className="poker_cards row">
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                <img src={"/static/media/poker_cards/roll.gif"} alt="HILO Xanh Chin, xanhchin.io" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                <img src={"/static/media/poker_cards/roll.gif"} alt="HILO Xanh Chin, xanhchin.io" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                <img src={"/static/media/poker_cards/roll.gif"} alt="HILO Xanh Chin, xanhchin.io" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                <img src={"/static/media/poker_cards/roll.gif"} alt="HILO Xanh Chin, xanhchin.io" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                <img src={"/static/media/poker_cards/roll.gif"} alt="HILO Xanh Chin, xanhchin.io" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="poker_dimeBtn">
                                        <div className="row">
                                            <div className="col">
                                                <button onClick={() => chooseSide(0)} type='button' className={cName[0]}>0.5 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button onClick={() => chooseSide(1)} type='button' className={cName[1]}>1 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button onClick={() => chooseSide(2)} type='button' className={cName[2]}>5 DIME</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="poker_Spin_btns dualBtn">
                                    <a onClick={() => spin()} className='BlueBtn'>Spin</a>
                                    { auto ? 
                                        <a onClick={() => stopSpin()} className='RedBtn'>STOP</a> :
                                        <a onClick={() => autoSpin()} className='RedBtn'>Auto Spin</a>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <PokerReward/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MiniPoker;

/*

*/