import React from 'react';

import Card1 from '../../assets/img/Card-1.png';
import BigCard from '../../assets/img/card-2.png';

function CardSelectBox2() {
    return ( 
        <div className="card_select_area">
            <div className="cardList_area">
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
                <img src={Card1} className='SingleCard' alt="SingleCard" />
            </div>
            <div className="threeCardBox">
                <div className="row">
                    <div className="col-4">
                        <div className="cardDragBox">
                            <div className="cardDragImg">
                                <div className="cardImgText">
                                    <p>100.565656</p>
                                    <h3>DIMS</h3>
                                </div>
                            </div>
                            <h3>Higher or Same</h3>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cardDragBox activeCard">
                            <div className="cardDragImg">
                                <img src={BigCard} alt="BigCard" className='dragCard' />
                                <div className="cardImgText">
                                    <p>100.565656</p>
                                    <h3>DIMS</h3>
                                </div>
                            </div>
                            <h3>King is Highest <br /> Ace is Lowest</h3>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cardDragBox">
                            <div className="cardDragImg">
                                <div className="cardImgText">
                                    <p>100.565656</p>
                                    <h3>DIMS</h3>
                                </div>
                            </div>
                            <h3>Higher or Same</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardSelectBox2;