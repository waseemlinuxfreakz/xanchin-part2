import React from 'react';
import { useState, useEffect } from 'react';

import {storeAppDispatch} from '../GlobalState/Store';
import { setId, setTime } from '../GlobalState/GameReducer';

import { socket } from '../services/crash';
import { userAccount } from '../web3/testnet';

import Header from '../components/Crash/Header';
import DepositPopup from '../components/Modal/DepositPopup';
import WithdrawPopup from '../components/Modal/WithdrawPopup';
import CrashUserBettingValue from '../components/Crash/CrashUserBettingValue';
import CrashUserBettingColor from '../components/Crash/CrashUserBettingColor';
import CrashGraphbox from '../components/Crash/CrashGraphbox';
import CrashBeatOn from '../components/Crash/CrashBetOn';
import CrashBeaTop from '../components/Crash/CrashBeTop';
import CrashBetOnColor from '../components/Crash/CrashBetOnColor';


function Crash() {
    const [side, setSide] = useState(1);
    const [bets, setBet] = useState([]);

    useEffect(() => {

        socket.on('COUNTDOWN', (...args) => {
            storeAppDispatch(setId(args[0].game_id));
            storeAppDispatch(setTime(args[0].timeleft));
        });

        socket.on('NEW_BET', (...args) => {
            setBet([args[0], ...bets]);
        });

        return () => {
            socket.off('NEW_BET');
            socket.off('COUNTDOWN');
        };
    });

    function chooseSide(value) {
        setSide(value);
    }
    if (side === 1)
    return ( 
        <div className='PageWraper bigSmallWrap gameCardWraper'>
            <Header/>
            <section className="bigSmallGame_area affilate_area">
                <div className="bigSmallGame_container">
                    { userAccount ?
                    <div className="bismlDipoWith MobileDipoWith">
                        <DepositPopup sc={process.env.REACT_APP_SCROCKET}/>   
                        <WithdrawPopup sc={process.env.REACT_APP_SCROCKET}/>
                    </div> :
                    <></>
                    }
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="beatingGround">
                                <CrashGraphbox/>
                                <CrashBeaTop side={side} chooseSide={chooseSide}/>
                                <CrashBeatOn/>
                                
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="crashBeatCol">
                                <CrashUserBettingValue list={bets}/>
                                <br />
                                <CrashUserBettingColor list={bets}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
     else 
     return ( 
        <div className='PageWraper bigSmallWrap gameCardWraper'>
            <Header/>
            <section className="bigSmallGame_area affilate_area">
                <div className="bigSmallGame_container">
                    { userAccount ?
                    <div className="bismlDipoWith MobileDipoWith">
                        <DepositPopup sc={process.env.REACT_APP_SCROCKET}/>   
                        <WithdrawPopup sc={process.env.REACT_APP_SCROCKET}/>
                    </div> :
                    <></>
                    }
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="beatingGround">
                                <CrashGraphbox/>
                                <CrashBeaTop side={side} chooseSide={chooseSide}/>
                                <CrashBetOnColor/>
                                
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="crashBeatCol">
                                <CrashUserBettingValue list={bets}/>
                                <br />
                                <CrashUserBettingColor list={bets}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Crash;