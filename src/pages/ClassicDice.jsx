import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {socket} from '../services/classicdice';
import { userAccount, sendTransaction} from '../web3/testnet'

import UserBettingList from '../components/ClassicDice/UserBettingList';
import Header from '../components/ClassicDice/Header';
import Close from '../assets/img/icons/close.svg';


function amountControl (value) {
    // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
    let temp = value * Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    temp = Math.floor(temp);
    temp = temp / Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    
    // now return the quantity in correct format of token precision and symbol.
    return Number.parseFloat(temp).toFixed(process.env.REACT_APP_TOKENPRECISION) + ' ' + process.env.REACT_APP_TOKENSYMBOL;
}

function payoutControl (value) {
    let temp = value * Math.pow(10, 4);
    temp = Math.floor(temp);
    temp = temp / Math.pow(10, 4);
    return Number.parseFloat(temp).toFixed(4);
}


function ClassicDice() {

    const rake = 1;

    const [amount, setAmount] = useState(1);
    const [payout, setPayout] = useState(1.0102);
    const [value, setValue] = useState(2);
    const [result, setResult] = useState(50);

    // side have 2 value: 0 and 1, 0 for over, 1 for under.
    const [side, setSide] = useState(0); 
    const text = ["Roll Over", "Roll Under"];
    const betSide = ["over", "under"];

    function handleAmount(e) {
        // e.preventDefault();
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setAmount(e.target.value);
        //console.log(amount);
    }
    function handleValue(e) {
        // e.preventDefault();
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setValue(e.target.value);
    }
    function amountFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || 1);
        //console.log(amount);
    }
    function valueInt(){
        // The conditional prevents parseInt(null) = NaN (when the user deletes the input)
        setValue(parseInt(value) || ''); //parseInt
        //console.log(value);
        if (side === 0) setPayout(payoutControl((100 - rake) / (100 - value)));
        if (side === 1) setPayout(payoutControl((100 - rake) / value));
    }
    function exchange() {
        if (side === 1) setPayout(payoutControl((100 - rake) / (100 - value)));
        if (side === 0) setPayout(payoutControl((100 - rake) / value));
        setSide((side+1)%2);
    }

    const [bets, setBet] = useState([]);

    useEffect(() => {

        console.log(userAccount);
        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            setBet([args[0], ...bets]);
            setResult(args[0].result);
        });

        return () => {
            socket.off('RESULT');
        };
    });

    function rollNow () {
        // console.log("amount, payout, value: ", amount, payout, value);
        // We don't reset amount and value. Client may be re-bet it.
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
                to: process.env.REACT_APP_SCCLASSICDICE,
                quantity:  amountControl(amount),
                memo: 'play;'+ betSide[side] + ';' + value
            },
            }]
        };
        sendTransaction(transact);
        console.log(transact);
    }

    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <Header/>
            <section className="clasicdice_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="classicDiscBox">
                                <div className="classic_disc">
                                    <div className="numberList">
                                        {bets.slice(0, 9).map(bet => {
                                            if (parseFloat(bet.reward_amount) > 0) 
                                                return <span key={v4()} className='greenNumber NumberItem'>{bet.result}</span>;
                                            else return <span key={v4()} className='redNumber NumberItem'>{bet.result}</span>
                                        })}
                                    </div>
                                    <div className="winBox">
                                        <span className='winTitle'> </span>
                                        <h3 className="winNumber">{result}</h3>
                                    </div>
                                    <div className="winRange selectRange">
                                        <input value={result} type="range" min="0" max="100" readOnly/>
                                    </div>
                                    <div className="rangeNumberSelect">
                                        <span>0</span>
                                        <span>25</span>
                                        <span>50</span>
                                        <span>75</span>
                                        <span>100</span>
                                    </div>
                                </div>
                                <div className="PayOutRoll_box">
                                    <div className="PayOutRoll">
                                        <div className="row">
                                            <div className="col-6">
                                                 <div className="PayOutRollItem">
                                                    <p>{text[side]}</p>
                                                    <div className="payOutInput">
                                                        <input type="number" onChange={handleValue} onBlur = {valueInt} value={value}  />
                                                        <img onClick={()=>exchange()} src={'/static/media/icons/exchange.svg'} alt="Exchange" />
                                                    </div>
                                                 </div>
                                            </div>
                                            <div className="col-6">
                                                 <div className="PayOutRollItem">
                                                    <p>Pay Out</p>
                                                    <div className="payOutInput">
                                                        <input type="number" readOnly value={payout}  />
                                                        <img src={Close} alt="" />
                                                    </div>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="classicDiscBeat">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="select_range_area">
                                            <div className="play_amount">
                                                <h3>Bet Amount</h3>
                                                <div className="theAmount"><input type="number" onChange={handleAmount} onBlur ={amountFloat} value={amount} />DIME</div>
                                            </div>
                                            <div className="selectRange">
                                                <input type="range" min="1" max="200" onChange={handleAmount} onBlur ={amountFloat} value={amount} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="WinAmountArea">
                                            <div className="WinAmountBox select_range_area">
                                                <div className="play_amount">
                                                    <h3>Win Amount</h3>
                                                    <span className='WinAmount WinAmountInput'><input type="number" value={amount*payout} readOnly/>{process.env.REACT_APP_TOKENSYMBOL}</span>            
                                                </div>
                                            </div>
                                            <a onClick={()=> rollNow()} className='BlueBtn w-100'>Roll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <UserBettingList bets={bets}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default ClassicDice;

// 