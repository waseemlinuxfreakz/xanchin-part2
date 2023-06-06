import React from 'react';

import { useEffect, useState } from 'react';

import {storeAppDispatch} from '../GlobalState/Store';
import { setId, setTime } from '../GlobalState/GameReducer';

import {socket} from "../services/baccarat";
import { userAccount } from '../web3/testnet';

//import BaccaratMultiHeader from '../headerfooter/BaccaratMultiHeader';
import DepositPopup from '../components/Modal/DepositPopup';
import WithdrawPopup from '../components/Modal/WithdrawPopup';
import UserBettingList from '../components/BaccaratMulti/UserBettingList';
import BaccaratGame from '../components/BaccaratMulti/BaccaratGame';
import BaccaratGameStart from '../components/BaccaratMulti/BaccaratGameStart';
import Header from '../components/BaccaratMulti/Header';


function BaccaratMulti() {

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
        <div className='BaccaratMultiPage PageWraper  bigSmallWrap gameCardWraper'>
            <Header/>
            <section className="baccarat_area affilate_area">
                <div className="bigSmallGame_container">
                    { userAccount ?
                    <div className="bismlDipoWith MobileDipoWith">
                        <DepositPopup sc={process.env.REACT_APP_SCBACCARAT}/>   
                        <WithdrawPopup sc={process.env.REACT_APP_SCBACCARAT}/>
                    </div> :
                    <></>
                    }
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="BaccaratGame_area">
                                <BaccaratGame />
                                <BaccaratGameStart />
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

export default BaccaratMulti;