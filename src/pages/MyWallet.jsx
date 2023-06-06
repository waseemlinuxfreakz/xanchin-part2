import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import { userAccount, updateWallet, logout } from '../web3/testnet';

import Header from '../components/Header';
import Footer from '../components/Footer';


import Link from '../assets/img/icons/Link.svg';
import SwapForm from '../components/MyWallet/SwapForm';
import SendDIMEto from '../components/MyWallet/SendDIMEto';


function MyWallet() {
    const navigate = useNavigate();

    const UserState = useSelector((store) => store.user);
    if (!UserState.token) updateWallet();

    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="mywallet_area">
                <div className="wallet_top">
                    <div className="wallet_number">{UserState.userAccount}</div>
                </div>
                <div className="wallet_container">
                    <div className="waxp-dime">
                        <div className="waxoBox">
                            <span className="box_title">WAXP</span>
                            <h2>{UserState.waxp ? parseFloat(UserState.waxp).toFixed(2) : 0} WAXP</h2>
                        </div>
                        <span className="hrLine"></span>
                        <div className="dimeBox">
                            <span className="box_title">DIME</span>
                            <h2>{UserState.token ? parseFloat(UserState.token).toFixed(2) : 0} DIME</h2>
                        </div>
                    </div>
                    <div className="swapBtns">
                        <SwapForm/>
                        <SendDIMEto/>
                    </div>
                    <div className="exchangeTokken">
                        <img src={Link} alt="Link" /> Exchange token p2p
                    </div>
                    <div className="walletBtnBox">
                        <a onClick={()=> { logout(); localStorage.removeItem('xanhchin.io', ''); navigate("/") }} className="RedBtn">Logout</a>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default MyWallet;