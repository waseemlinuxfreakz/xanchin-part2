import React from 'react';
import { useNavigate } from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';

function Footer() {

    const navigate = useNavigate();

    return ( 
        <footer className="footer_area">
            <div className="footer_content">
                <ul className="footer_nav">
                    <li><a onClick={() => navigate("/how-to-play")} >How to Play</a></li>
                    <li><a onClick={() => navigate("/game-policy")} >Game Policy</a></li>
                    <li><a onClick={() => navigate("/faq")} >FAQ</a></li>
                    <li><a onClick={() => navigate("/term-condition")} >Terms & Condition</a></li>
                    <li><a onClick={() => navigate("/privacy-policy")} >Privacy Policy</a></li>
                    <li><a onClick={() => navigate("/contact-us")} >Contact US</a></li>
                </ul>
            </div>
             <div className="FootermobileMenu">
                <div className="mobileFootMenu">
                    <a onClick={() => navigate("/")} className='HomeFooter active'>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.51489 17.8332C1.8233 17.8332 1.23104 17.6353 0.738121 17.2395C0.245203 16.8437 -0.000836161 16.3684 2.13488e-06 15.8138V6.72657C2.13488e-06 6.40683 0.0892804 6.10393 0.267837 5.81785C0.446394 5.53177 0.692435 5.29617 1.00596 5.11106L8.55062 0.567451C8.78115 0.432825 9.02216 0.331856 9.27365 0.264543C9.52514 0.19723 9.78711 0.163574 10.0596 0.163574C10.332 0.163574 10.594 0.19723 10.8455 0.264543C11.0969 0.331856 11.338 0.432825 11.5685 0.567451L19.1131 5.11106C19.4275 5.29617 19.674 5.53177 19.8525 5.81785C20.0311 6.10393 20.1199 6.40683 20.1191 6.72657V15.8138C20.1191 16.3691 19.8726 16.8447 19.3797 17.2405C18.8868 17.6363 18.295 17.8338 17.6042 17.8332H12.5744V10.7653H7.54466V17.8332H2.51489Z" fill="white"/>
                        </svg>
                         Home
                    </a>
                    <span className='menuDevider'>|</span>
                    <a onClick={() => navigate("/affilate")} className='FooterAffilate'>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.07216 0.276088L0.328369 0.272461V2.60295H6.67682C9.47056 2.60295 11.7449 5.05986 11.7449 8.08048C11.7449 11.04 9.56017 13.4601 6.84358 13.557H2.51257V6.13132H6.592C7.5782 6.13132 8.37751 6.99917 8.37751 8.06441C8.37751 9.12811 7.5782 9.99492 6.592 9.99492H5.80659V7.36859H3.65259V12.3244H6.98016C8.97076 12.1119 10.533 10.2669 10.533 8.06441C10.533 6.45722 9.65218 4.94173 8.33198 4.20704C7.42102 3.6998 6.41901 3.80446 5.4309 3.80187C4.48927 3.80083 0.3576 3.80135 0.3576 3.80135V15.8755L6.67682 15.8875C10.6595 15.8875 13.8989 12.3865 13.8989 8.08048C13.8993 3.92725 10.8698 0.499396 7.07216 0.276088Z" fill="white"/>
                        </svg>
                        Affilate
                    </a>
                </div>
            </div>
        </footer>
     );
}

export default Footer;