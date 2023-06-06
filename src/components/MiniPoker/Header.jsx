import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userAccount, updateWallet } from '../../web3/testnet';

import ArrowLeft from '../../assets/img/icons/arrow-left-white.svg';
import Affilate from '../../assets/img/icons/affilate-blue.svg';
import HomeLineWhite from '../../assets/img/icons/HomeLineWhite.svg';


function Header() {

    const navigate = useNavigate();
    const UserState = useSelector((store) => store.user);
    if (!UserState.token) updateWallet();
    
    return ( 
        <header className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a onClick={() => navigate(-1)} className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Mini Poker</h2>
                    </div>
                    {userAccount ? 
                        <div className="affilate_btn">
                            <a onClick={() => navigate("/my-wallet")} className="BlueBtn"><img src="/static/media/icons/wallet-color.svg" alt="Walet" /> {UserState.token ? parseFloat(UserState.token).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"}</a>
                        </div> : 
                        <a onClick={() => navigate("/login")} className="BlueBtn"><img src="/static/media/icons/wallet-color.svg" alt="Walet" /> Connect to wallet</a>
                    }
                </nav>
            </div>
        </header>
     );
}

export default Header;