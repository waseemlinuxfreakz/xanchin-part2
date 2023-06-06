import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UserBettingList from './UserBettingList';

function Lotterypage3() {
    return ( 
        <div className="PageWraper LotterypageWrap">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="LotterypageNumber LotterypageNumber2 blueCard">
                            <div className="timeCountDown">
                                <p>8<span>h</span></p>:<p>15<span>m</span></p>:<p>30<span>s</span></p>
                            </div>
                            <div className="selectNumberLott selectNumberLottBtns">
                                <div className="selectNumberLottBtnsList">
                                    <button type='button'>07</button>
                                    <button type='button'>25</button>
                                    <button type='button'>37</button>
                                    <button type='button'>43</button>
                                    <button type='button' className='opacity5'>00</button>
                                    <button type='button' className='opacity5'>00</button>
                                </div>
                                <p>Selected number for the lottery</p>
                                <h4>2500 DIME <span className='color-yellow'>JACKPOT</span></h4>
                            </div>
                            <div className="numberRange">
                                <div className="rangeInput">
                                    <input type="range" id="" name="" min="0" max="99"/>
                                </div>
                                <div className="rangeNumber">
                                    <p>00</p>
                                    <p>99</p>
                                </div>
                            </div>
                        </div>
                        <div className="lotteryBeat">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="beat_amounts">
                                        <div className="amoiunt_to_beat">
                                            Bet Amount
                                            <button type='button'>10 DIME</button>
                                        </div>
                                        <div className="numberRange">
                                            <input type="range" id="" name="" min="0" max="10000"/>
                                            <div className="rangeNumber">
                                                <p>0</p>
                                                <p>10 K</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="buyTickets">
                                        <div className="dualButton">
                                            <button type='button' className='gray_btn'>DE</button>
                                            <button type='button' className='lightgray_btn'>LO</button>
                                        </div>
                                        <button type='button' className="buyTicketsBtn">
                                            Buy Ticket
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <UserBettingList/>
                    </div>
                </div>
                <div className="how_to_playBox">
                    <h2>How to Play : </h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="howToPlayCard">
                                <h3>Buy Tickets :</h3>
                                <p>Buy a ticket and Choose numbers for the ticket.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="howToPlayCard">
                                <h3>Wait for the Draw :</h3>
                                <p>Wait for the draw at 15:00 UTC+0 every day.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="howToPlayCard">
                                <h3>Check the Prizes :</h3>
                                <p>Once the draw is over, Come back to this page and check your prize.</p>
                            </div>
                        </div>
                    </div>
                    <p className='color-blue'>For each draw you have to select the number for betting, then wait for the draw and get chance to win the prize. </p>
                    <h5 className='color-yellow'>1 win 99x for DE <span className='color-blue'>and</span> 27 win 99x (1 win 99/27) for LO</h5>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default Lotterypage3;