import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {storeAppDispatch} from '../../GlobalState/Store';
import { setBaccarat } from '../../GlobalState/UserReducer';
import { setBankroll } from '../../GlobalState/GameReducer';
import {socket} from '../../services/baccarat';
import { userAccount , updateBalance, updateBankroll} from '../../web3/testnet';

import ArrowLeft from '../../assets/img/icons/arrow-left-white.svg';
import Affilate from '../../assets/img/icons/affilate-blue.svg';
import Info from '../../assets/img/icons/i.svg';
import HomeLineWhite from '../../assets/img/icons/HomeLineWhite.svg';
import DepositPopup from '../Modal/DepositPopup';
import WithdrawPopup from '../Modal/WithdrawPopup';
// import BaccaratMultiHistoryID from './BaccaratHistoryID';

function Header() {

    const navigate = useNavigate();
    const UserState = useSelector((store) => store.user);
    const GameState = useSelector((store) => store.game);

    if (!GameState.bankroll) updateBankroll(process.env.REACT_APP_SCBACCARAT);
    
    useEffect(() => {

        if (userAccount) {
            if (!UserState.baccarat) updateBalance(process.env.REACT_APP_SCBACCARAT);

            socket.emit("join", {"player": userAccount});
            socket.on('GAME_BALANCE', (...args) => {
                storeAppDispatch(setBaccarat(args[0].balance));
            });
        }

        socket.on('BANKROLL', (...args) => {
            storeAppDispatch(setBankroll(args[0].bankroll));
        });
  
        return () => {
            socket.off('GAME_BALANCE');
            socket.off('BANKROLL');
        };
    }, []);
    
    return ( 
        <header className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a onClick={() => navigate(-1)} className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Baccarat Multiplayer</h2>
                    </div>
                    <div className="bigsmall_heade_right">
                        <a href="#" className='infoLink'><img src={Info} alt="Info" /></a>
                        <a onClick={() => navigate("/bankroll/baccarat-multiplayer")} className='walletLink grayBtn' >
                            <img src={HomeLineWhite} alt="HomeLineWhite" />
                            <span><img src={Affilate} alt="Affilate" />{GameState.bankroll ? parseFloat(GameState.bankroll).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"}</span> 
                        </a>
                        {/*<BaccaratMultiHistoryID/>*/}
                        {userAccount ? 
                        <><div className="bismlDipoWith deskDipoWith">
                            <DepositPopup sc={process.env.REACT_APP_SCBACCARAT}/>   
                            <WithdrawPopup sc={process.env.REACT_APP_SCBACCARAT}/>
                        </div>
                        <div className="affilate_btn">
                            <img src={Affilate} alt="Affilate" /> {UserState.baccarat ? parseFloat(UserState.baccarat).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"}
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