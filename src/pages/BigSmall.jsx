import React from 'react';
import { useEffect } from 'react';

import {storeAppDispatch} from '../GlobalState/Store';
import { setId, setTime } from '../GlobalState/GameReducer';

import {socket} from "../services/taixiu";
import { userAccount } from '../web3/testnet';

import Header from '../components/BigSmall/Header';
import UserBettingList from '../components/BigSmall/UserBettingList';
import BigSmallBet from '../components/BigSmall/BigSmallBet';

import DepositPopup from '../components/Modal/DepositPopup';
import WithdrawPopup from '../components/Modal/WithdrawPopup';

function BigSmall() {

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
        <div className='PageWraper bigSmallWrap'>
            <Header/>
            <section className="bigSmallGame_area affilate_area">
                <div className="bigSmallGame_container">
                    { userAccount ?
                    <div className="bismlDipoWith MobileDipoWith">
                        <DepositPopup sc={process.env.REACT_APP_SCTAIXIU}/>   
                        <WithdrawPopup sc={process.env.REACT_APP_SCTAIXIU}/>
                    </div> :
                    <></>
                    }
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <BigSmallBet/>
                            <br/>
                            <br/>
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

export default BigSmall;