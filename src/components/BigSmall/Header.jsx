import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {storeAppDispatch} from '../../GlobalState/Store';
import { setTaixiu } from '../../GlobalState/UserReducer';
import {socket} from '../../services/taixiu';
import { userAccount , updateBalance} from '../../web3/testnet';

import ArrowLeft from '../../assets/img/icons/arrow-left-white.svg';
import Affilate from '../../assets/img/icons/affilate-blue.svg';
import Walet from '../../assets/img/icons/wallet-color.svg';
import ResultHistory from './ResultHistory';

import DepositPopup from '../Modal/DepositPopup';
import WithdrawPopup from '../Modal/WithdrawPopup';

function Header() {

    const navigate = useNavigate();

    const UserState = useSelector((store) => store.user);

    useEffect(() => {

        if (userAccount) {
            if (!UserState.taixiu) updateBalance(process.env.REACT_APP_SCTAIXIU);

            socket.emit("join", {"player": userAccount});
            socket.on('GAME_BALANCE', (...args) => {
                storeAppDispatch(setTaixiu(args[0].balance));
            });
        }

        return () => {
          socket.off('GAME_BALANCE');
        };
    }, []);

    // console.log(userAccount);
    return ( 
        <header className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a onClick={() => navigate(-1)} className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Tai Xiu</h2>
                    </div>
                    <div className="bigsmall_heade_right">
                        <ResultHistory/>
                        {userAccount ? 
                        <><div className="bismlDipoWith deskDipoWith">
                            <DepositPopup sc={process.env.REACT_APP_SCTAIXIU}/>   
                            <WithdrawPopup sc={process.env.REACT_APP_SCTAIXIU}/>
                        </div>
                        <div className="affilate_btn">
                            <img src={Affilate} alt="Affilate" /> {UserState.taixiu ? parseFloat(UserState.taixiu).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"}
                        </div></> :
                        <a onClick={() => navigate("/login")} className="BlueBtn"><img src="/static/media/icons/wallet-color.svg" alt="Walet" /> Connect to wallet</a>
                        }
                    </div>
                </nav>
            </div>
        </header>
     );
}

export default Header;

// <a href="/my-wallet" className="BlueBtn"><img src={"/static/media/icons/wallet-color.svg"} alt="Walet" /> Connect to wallet</a>