import React from 'react';
import { useState, useEffect } from 'react';

import {socket} from '../services/xocdia';
import { userAccount } from '../web3/testnet';

import {storeAppDispatch} from '../GlobalState/Store';
import { setId, setTime } from '../GlobalState/GameReducer';

import Header from '../components/ShakeDish/Header';

import UserBettingList from '../components/ShakeDish/UserBettingList';
import DepositPopup from '../components/Modal/DepositPopup';
import WithdrawPopup from '../components/Modal/WithdrawPopup';
import GameCardStartWill from '../components/ShakeDish/ShakeDishStartWill'; // send coutdown time.
import BetStart from '../components/ShakeDish/BetStart';                    // send side here.
import ShakeBetingGround from '../components/ShakeDish/ShakeBetingGround';  // send rank and setSide to here.

function ShakeDish() {
    
    useEffect(() => {
        socket.on('COUNTDOWN', (...args) => {
            storeAppDispatch(setId(args[0].game_id));
            storeAppDispatch(setTime(args[0].timeleft));
        });
        return () => {
          socket.off('COUNTDOWN');
        };
    }, []);

    return ( 
        <div className='PageWraper bigSmallWrap gameCardWraper'>
            <Header/>
            <section className="bigSmallGame_area affilate_area">
                <div className="bigSmallGame_container">
                    { userAccount ?
                    <div className="bismlDipoWith MobileDipoWith">
                        <DepositPopup sc={process.env.REACT_APP_SCXOCDIA}/>   
                        <WithdrawPopup sc={process.env.REACT_APP_SCXOCDIA}/>
                    </div> :
                    <></>
                    }
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="beatingGroundRow row">
                                <div className="beatingGround">
                                    <ShakeBetingGround />
                                    <BetStart />
                                </div>
                                <div className="gameStartWill">
                                    <GameCardStartWill />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <UserBettingList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default ShakeDish;
