import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Spin from '../assets/img/icons/Spin.svg';
import GameSlider from '../components/GameSlider';



function HomePage() {
    
    const navigate = useNavigate();

    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="homepage_area">
                <div className="home_top_button">
                    <a onClick={()=> navigate("/")} className='spinBtn'><img src={"/static/media/icons/Spin.svg"} alt="Spin" /> Daily Spin</a>
                </div>
                <div className="HomeGameSlider">
                    <GameSlider/>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default HomePage;

// <a onClick={()=> navigate("/daily-spin")} className='spinBtn'><img src={"/static/media/icons/Spin.svg"} alt="Spin" /> Daily Spin</a>