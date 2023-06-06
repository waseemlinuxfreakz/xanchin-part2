import React, { Component } from 'react';

import WheelComponent from 'react-wheel-of-prizes';
//import 'react-wheel-of-prizes/dist/index.css'

import DailySpinLibrary from '../components/DailySpin/DailySpinLibrary';
import Header from '../components/DailySpin/Header';

function DailySpin() {
    return ( 
        
        <div className='PageWraper dailySpinWraper'>
            <Header/>
            <section className="dailySpin_area">
                <div className="container">
                    <div className="dailySpin_box">
                        <div className="dailySpin">
                            <h2>You can spin only once in a day</h2>
                            <div className="theSpin">
                                {/* <img src={Spin} alt="" /> */}
                                <DailySpinLibrary/>
                            </div>
                            <button type='button' className='BlueBtn SpinBtn'>Spin</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default DailySpin;