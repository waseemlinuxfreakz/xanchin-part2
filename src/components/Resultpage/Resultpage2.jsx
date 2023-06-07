import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Star from '../../assets/img/new/StarWhite.svg';

function Resultpage2() {
    return ( 
        <div className="PageWraper ResultPageWrape2 pt-5">
            <Header/>
            <div className="container">
                <div className="resultContainer">
                    <div className="resultTop">
                        <p>Winning Tickets : <b className='color-yellow'>120</b></p>
                        <p>Winning Price :  <b className='color-yellow'>5000 DIME</b></p>
                    </div> 
                    <div className="resultCart">
                        <div className="resultCartDate">08 may 2023</div>
                        <div className="resultColum">
                            <div className="resultTitle">Star Number :</div>
                            <div className="result_number startResult">
                                <button type='button'><img src={Star} alt="Star" /> 555</button>
                                <button type='button'><img src={Star} alt="Star" /> 444</button>
                            </div>
                            <div className="winingPrice">5000 DIME</div>
                        </div>
                        <div className="resultColum">
                            <div className="resultTitle">First Class :</div>
                            <div className="result_number">
                                <button type='button'>123</button>
                                <button type='button'>234</button>
                                <button type='button'>123</button>
                                <button type='button'>234</button>
                            </div>
                            <div className="winingPrice">2000 DIME</div>
                        </div>
                        <div className="resultColum">
                            <div className="resultTitle">Second Class :</div>
                            <div className="result_number">
                                <button type='button'>654</button>
                                <button type='button'>741</button>
                                <button type='button'>334</button>
                                <button type='button'>455</button>
                                <button type='button'>998</button>
                                <button type='button'>203</button>
                            </div>
                            <div className="winingPrice">1000 DIME</div>
                        </div>
                        <div className="resultColum">
                            <div className="resultTitle">Third Class :</div>
                            <div className="result_number">
                                <button type='button'>020</button>
                                <button type='button'>125</button>
                                <button type='button'>362</button>
                                <button type='button'>232</button>
                                <button type='button'>125</button>
                                <button type='button'>203</button>
                                <button type='button'>125</button>
                                <button type='button'>203</button>
                            </div>
                            <div className="winingPrice">500 DIME</div>
                        </div>
                    </div>
                    <br />
                    
                    <div className="resultCart">
                        <div className="resultCartDate">08 may 2023</div>
                        <div className="resultColum">
                            <div className="resultTitle">Star Number :</div>
                            <div className="result_number startResult">
                                <button type='button'><img src={Star} alt="Star" /> 555</button>
                                <button type='button'><img src={Star} alt="Star" /> 444</button>
                            </div>
                            <div className="winingPrice">5000 DIME</div>
                        </div>
                        <div className="resultColum">
                            <div className="resultTitle">First Class :</div>
                            <div className="result_number">
                                <button type='button'>123</button>
                                <button type='button'>234</button>
                                <button type='button'>123</button>
                                <button type='button'>234</button>
                            </div>
                            <div className="winingPrice">2000 DIME</div>
                        </div>
                        <div className="resultColum">
                            <div className="resultTitle">Second Class :</div>
                            <div className="result_number">
                                <button type='button'>654</button>
                                <button type='button'>741</button>
                                <button type='button'>334</button>
                                <button type='button'>455</button>
                                <button type='button'>998</button>
                                <button type='button'>203</button>
                            </div>
                            <div className="winingPrice">1000 DIME</div>
                        </div>
                        <div className="resultColum">
                            <div className="resultTitle">Third Class :</div>
                            <div className="result_number">
                                <button type='button'>020</button>
                                <button type='button'>125</button>
                                <button type='button'>362</button>
                                <button type='button'>232</button>
                                <button type='button'>125</button>
                                <button type='button'>203</button>
                                <button type='button'>125</button>
                                <button type='button'>203</button>
                            </div>
                            <div className="winingPrice">500 DIME</div>
                        </div>
                    </div>
                </div> 
            </div>
            <Footer/>
        </div>
     );
}

export default Resultpage2;