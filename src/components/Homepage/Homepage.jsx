import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import Spinn from '../../assets/img/new/homepage/spinwheel.svg';
import Ball from '../../assets/img/new/homepage/ball.svg';
import Jackpot from '../../assets/img/new/homepage/jackpot.svg';
import jackpotbg from '../../assets/img/new/homepage/jackpotbg.png';


function Homepage() {
    return ( 
        <div className="PageWraper HomepageWrap">
            <Header/>
            <div className="HomepageWrapArea">
                <div className="container">
                    <div className="lottrey_row">
                        <div className="lattery_colum spinnLattery">
                            <div>
                                <h2>DE/LO</h2>
                                <h4>LOTTERY</h4>
                            </div>
                            <img src={Spinn} alt="Spinn" className='SpinnImg' />
                        </div>
                        <div className="lattery_colum max3dLattery">
                            <img src={Ball} alt="Ball" className='BallImg' />
                            <div>
                                <h2>MAX 3D PRO</h2>
                                <h4>LOTTERY</h4>
                            </div>
                        </div>
                        <div className="lattery_colum jackpotLattery">
                            <div className='jackpotText'>
                                <h2>2500 DIME</h2>
                                <h4>JACKPOT PRICE</h4>
                                <p><span className='color-w'>1000</span> Tickets Winner from <span className="color-w">5,00,000</span> Sold Out Tickets</p>
                            </div>
                            <img src={Jackpot} alt="Ball" className='JackpotImg' />
                            <img src={jackpotbg} alt="Ball" className='jackpotbg' />
                            <div className="timeRemaining">
                                <div className="time"> 
                                    <p>1<span>d</span></p>
                                    <p>8<span>h</span></p>
                                    <p>15<span>m</span></p>
                                    <p>30<span>s</span></p>
                                </div>
                                <p>Time Remaining</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default Homepage;