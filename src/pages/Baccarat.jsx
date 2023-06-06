import React from 'react';
import Header from '../components/Baccarat/Header';
import DepositPopup from '../components/Modal/DepositPopup';
import WithdrawPopup from '../components/Modal/WithdrawPopup';
import UserBettingList from '../components/Baccarat/UserBettingList';
import BaccaratGame from '../components/Baccarat/BaccaratGame';
import BaccaratGameStartDeal from '../components/Baccarat/BaccaratGameStartDeal';

function BaccaratMultiSingle() {
    return ( 
        <div className='BaccaratMultiSinglePage PageWraper bigSmallWrap gameCardWraper'>
            <Header/>
            <section className="baccarat_area affilate_area">
                <div className="bigSmallGame_container">
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="BaccaratGame_area">
                                <BaccaratGame/>
                                <BaccaratGameStartDeal/>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <UserBettingList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default BaccaratMultiSingle;