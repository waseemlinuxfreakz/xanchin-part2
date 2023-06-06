import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {userAccount} from '../web3/testnet';

function Header() {
    const navigate = useNavigate();
    return ( 
        <header className="header_area">
            <div className="header_container">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="navbarCollapse" />
                    <Link to="/" className='navbar-brand'>
                        <img src="/static/media/logo.svg" alt="Logo" className='desklogo' />
                        <img src="/static/media/logo-2.svg" alt="Logo" className='Mobilelogo' />
                    </Link>
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="mainNavBar">
                            <Link to="/" className='nav-link gameMenu active'>Game</Link>
                            <Link to="/faq" className='nav-link sportMenu'>Lottery</Link>
                            <Link to="/" className='nav-link '>Home</Link>
                            <Link to="/affilate" className='nav-link '>Affilate</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="RightNavBox">
                        {userAccount ? <a onClick={() => navigate("/my-wallet")} className="BlueBtn"><img src="/static/media/icons/wallet-color.svg" alt="Walet" /> {userAccount}</a> : <a onClick={() => navigate("/login")}  className="BlueBtn"><img src="/static/media/icons/wallet-color.svg" alt="Walet" /> Connect to wallet</a> }
                        <div className="languageDrop">
                            <img src="/static/media/icons/world-line.svg" alt="world" />
                            <select name="language_change" id="language_change">
                                <option value="Eng">Eng</option>
                                <option value="Eng">Eng</option>
                            </select>
                        </div>
                    </div>
                </Navbar>
            </div>
        </header>
     );
}

export default Header;
// <a href="/my-wallet" className="BlueBtn"><img src={Walet} alt="Walet" /> Connect to wallet</a>
