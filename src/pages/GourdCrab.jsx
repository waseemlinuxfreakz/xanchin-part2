import React from 'react';
import { useState, useEffect } from 'react';

import {storeAppDispatch} from '../GlobalState/Store';
import { setId, setTime } from '../GlobalState/GameReducer';

import {socket} from "../services/baucua";
import { userAccount } from '../web3/testnet';

import Header from '../components/GourdCrab/Header';
import UserBettingList from '../components/GourdCrab/UserBettingList';
import DepositPopup from '../components/Modal/DepositPopup';
import WithdrawPopup from '../components/Modal/WithdrawPopup';
import BetingGround from '../components/GourdCrab/BetingGround';
import GameCardStartWill from '../components/GourdCrab/GourdCrabStartWill';
import BetStart from '../components/GourdCrab/BetStart';


function GourdCrab() {

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
                        <DepositPopup sc={process.env.REACT_APP_SCBAUCUA}/>   
                        <WithdrawPopup sc={process.env.REACT_APP_SCBAUCUA}/>
                    </div> :
                    <></>
                    }
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="beatingGroundRow row">
                                <div className="beatingGround">
                                    <BetingGround />
                                    <BetStart />
                                </div>
                                <div className="gameStartWill">
                                    <GameCardStartWill/>
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

export default GourdCrab;
