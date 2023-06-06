import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { userAccount, updateBankroll, updateWallet } from '../../web3/testnet';
import {storeAppDispatch} from '../../GlobalState/Store';
import { setBankroll } from '../../GlobalState/GameReducer';
import {socket} from '../../services/classicdice';

import ArrowLeft from '../../assets/img/icons/arrow-left-white.svg';
import Affilate from '../../assets/img/icons/affilate-blue.svg';
import HomeLineWhite from '../../assets/img/icons/HomeLineWhite.svg';
import DepositPopup from '../Modal/DepositPopup';
import WithdrawPopup from '../Modal/WithdrawPopup';


function Header() {

    const navigate = useNavigate();
    const UserState = useSelector((store) => store.user);
    const GameState = useSelector((store) => store.game);
    if (!GameState.bankroll) updateBankroll(process.env.REACT_APP_SCCLASSICDICE);
    if (!UserState.token) updateWallet();

    useEffect(() => {

        socket.on('BANKROLL', (...args) => {
            storeAppDispatch(setBankroll(args[0].bankroll));
        });
  
        return () => {
            socket.off('BANKROLL');
        };
    }, []);

    return ( 
        <header className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a onClick={() => navigate(-1)} className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Quay Xuc Xac</h2>
                    </div>
                    <div className="bigsmall_heade_right">
                        <a onClick={() => navigate("/bankroll/xuc-xac")} className='walletLink grayBtn' >
                            <img src={HomeLineWhite} alt="HomeLineWhite" />
                            <span><img src={Affilate} alt="Affilate" />{GameState.bankroll ? parseFloat(GameState.bankroll).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"}</span>
                        </a>
                        {userAccount ? 
                        <div className="affilate_btn">
                            <a onClick={() => navigate("/my-wallet")} className="BlueBtn"><img src="/static/media/icons/wallet-color.svg" alt="Walet" /> {UserState.token ? parseFloat(UserState.token).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"}</a>
                        </div> : 
                        <a onClick={() => navigate("/login")} className="BlueBtn"><img src="/static/media/icons/wallet-color.svg" alt="Walet" /> Connect to wallet</a>
                        }
                    </div>
                </nav>
            </div>
        </header>
     );
}

export default Header;