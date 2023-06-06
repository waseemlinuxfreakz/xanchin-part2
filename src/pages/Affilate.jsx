import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AffilateIcon from '../assets/img/icons/Affilate.svg';
import QR from '../assets/img/qr.png';
import AffilateTable from './AffilateTable';


function Affilate() {
    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="affilate_area">
                <div className="container">
                    <div className="affilate_content">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="affilate_qr">
                                    <div className="the_qr">
                                        <img src={QR} alt="qr" />
                                        <p>scane QR Code to Invite Friend</p>
                                    </div>
                                    <div className="qr_bottom">
                                        <h3><img src={AffilateIcon} alt="AffilateIcon" /> 15,200</h3>
                                        <a href="#" className='BlueBtn'>Withdraw</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="affilate_slider_area">
                                    <AffilateTable/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default Affilate;