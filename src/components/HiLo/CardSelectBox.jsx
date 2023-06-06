import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { v4 } from 'uuid';

import {socket} from '../../services/hilo';
import {userAccount} from '../../web3/testnet'
import { storeAppDispatch } from '../../GlobalState/Store';
import { setGame } from '../../GlobalState/HiLoReducer';

function CardSelectBox() {

    const HiLoState = useSelector((store) => store.hilo);

    useEffect(() => {
        //socket.emit("join", {"player": "arvernorix12"});
        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            storeAppDispatch(setGame(args[0]));
        });
        
        return () => {
          socket.off('RESULT');
        };
    }, []);

    function openCard (card) {
        if (card[0]) return <img key={v4()} src={"/static/media/poker_cards/" + card[0].key + "_" + card[0].type + ".svg"} alt="HILO Xanh Chin, xanhchin.io" />
        return <></>
    }

    function showCard (card) {
        return <img key={v4()} src={"/static/media/poker_cards/" + card.key + "_" + card.type + ".svg"} className='SingleCard' alt="SingleCard" />
    }

    return ( 
        <div className="card_select_area">
            <div className="cardList_area">
                {HiLoState.text_results.map(card => showCard(card))}
            </div>
            <div className="threeCardBox">
                <div className="row">
                    <div className="col-4">
                        <div className="cardDragBox">
                            <div className="cardDragImg">
                                <div className="cardImgText hiLowImg">
                                    <img src={"/static/media/hilo/hi.svg"} alt="High Low Xanh Chin, Xanh Chin, xanhchin.io" />
                                </div>
                            </div>
                            <h3>Higher or Same</h3>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cardDragBox ">
                            <div className="cardDragImg">
                                <div className="cardImgText hiLowImg">
                                    {openCard(HiLoState.text_results.slice(-1))}
                                </div>
                            </div>
                            <h3>King is Highest <br /> Ace is Lowest</h3>
                            
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cardDragBox">
                            <div className="cardDragImg">
                                <div className="cardImgText">
                                    <img src={"/static/media/hilo/lo.svg"} alt="High Low Xanh Chin, Xanh Chin, xanhchin.io" />
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

export default CardSelectBox;