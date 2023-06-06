import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { userAccount } from '../../web3/testnet';

import ArrowLeft from '../../assets/img/icons/arrow-left-white.svg';
import Affilate from '../../assets/img/icons/affilate-blue.svg';
import Info from '../../assets/img/icons/i.svg';
import HomeLineWhite from '../../assets/img/icons/HomeLineWhite.svg';

import BaccaratMultiHistory from './BaccaratHistory';
import BaccaratMultiHistoryID from './BaccaratHistoryID';

function Header() {

    const navigate = useNavigate();
    const UserState = useSelector((store) => store.user);

    return ( 
        <header className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a onClick={() => navigate(-1)} className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Baccarat Single player</h2>
                    </div>
                    <div className="bigsmall_heade_right">
                        <a href="#" className='infoLink'><img src={Info} alt="Info" /></a>
                        <a onClick={() => navigate("/bankroll/baccarat")} className='walletLink grayBtn' >
                            <img src={HomeLineWhite} alt="HomeLineWhite" />
                            <span><img src={Affilate} alt="Affilate" /> 1520</span>
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