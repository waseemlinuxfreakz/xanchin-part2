import React from 'react';

import Header from '../components/Bankroll/Header';
import BankrollList from '../components/Bankroll/BankrollList';
import BankrollBox from '../components/Bankroll/BankrollBox';



function Bankroll() {
    return ( 
        <div className='PageWraper bigSmallWrap BankRollWraper'>
            <Header/>
            <section className="bankrollArea bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <BankrollBox/>
                        </div>
                        <div className="col-lg-6">
                            <BankrollList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Bankroll;
