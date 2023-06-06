import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Link from '../../assets/img/icons/Link_2.svg';

function ContactUs() {
    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="contactUs_area affilate_area">
                <div className="container">
                    <div className="contactUsContainer">
                        <div className="contactUsInner">
                            <h2>Contact Us</h2>
                            <div className="contactBox">
                                <form action="">
                                    <div className="inputColLeft">
                                        <label htmlFor="contactEmail">Contact on mail</label>
                                        <input type="text" name='contactEmail' id='contactEmail' placeholder='contact@xanhchin.io' />
                                    </div>
                                    <button type='submit' className='BlueBtn'>
                                        Send
                                    </button>
                                </form>
                            </div>
                            <div className="contactBox contactTelegrm">
                                <div className="inputColLeft">
                                    <p>Conatact on telegram</p>
                                    <h4><img src={Link} alt="" /> xanhchin.telegram.ai</h4>
                                </div>
                                <a href="#" className='BlueBtn'>Join</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default ContactUs;