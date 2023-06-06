import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function RestrictedArea() {
    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="restricted_area">
                <div className="contentContainer restrictedContent">
                    <h2>Sorry! It looks like you’re trying to access <span className="color-blue">xanhchin.io</span> from a restricted area!</h2>
                    <p>The United Kingdoms, Gibraltar, Cyprus, Malta, Sweden, Bonaire, Curacao, St. Maarten, Denmark, Lithuania, Hungary, Slovakia, Portugal, Spain, Poland, Aruba, Bonaire, Saint Martin, the Netherlands, Saba, Statia, St. Martin, the United States and all of its territories, including but not limited to the U.S. Virgin Islands, American Samoa, Puerto Rico, Guam, the Northern Mariana Islands, Albania, Haiti, Iraq, Iran, North Korea, Myanmar, Nicaragua, South Sudan, Syria, Venezuela, Yemen, Zimbabwe, Cuba, Russia</p>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default RestrictedArea;