import React from 'react';
import Header from '../components/HiLo/Header';
import GameOver from '../components/GameOver';
import StartCardBalance from '../components/HiLo/StartCardBalance';
import CardSelectBox2 from '../components/HiLo/CardSelectBox2';


function PlayCard2() {
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <Header/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CardSelectBox2/>
                            <GameOver/>
                        </div>
                        <div className="col-xl-5">
                            <StartCardBalance/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default PlayCard2;
