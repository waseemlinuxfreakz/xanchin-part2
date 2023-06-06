import React from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowLeft from '../../assets/img/icons/arrow-left-white.svg';
import Affilate from '../../assets/img/icons/affilate-blue.svg';
import HomeLineWhite from '../../assets/img/icons/HomeLineWhite.svg';

// <a onClick={() => navigate(-1)}
function Header() {

    const navigate = useNavigate();
    //const game = useParams().game;
    return ( 
        <header className="bigsmall_headea_are header_area">
            <div className="header_container">
                <nav className="navbar bigSmallNav">
                    <div className="bigsmall_heade_left">
                        <a onClick={() => navigate(-1)} className="backLeft arrowBtn"><img src={ArrowLeft} alt="ArrowLeft" /></a>
                        <h2 className='menuPageTitme'>Bankroll</h2>
                    </div>
                </nav>
            </div>
        </header>
     );
}

export default Header;