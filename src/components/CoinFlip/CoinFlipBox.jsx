import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {socket} from '../../services/coinflip';
import {userAccount} from '../../web3/testnet'

 // 

function CoinFlipBox() {
    
    const HiLoState = useSelector((store) => store.hilo);

    useEffect(() => {
        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            console.log(args[0]);
        });
        
        return () => {
          socket.off('RESULT');
        };
    }, []);

    function result (value) {
        if (value === "tail") return <img src={"/static/media/coin/coin-1.svg"} alt="Coin Flip Xanh Chin, Xanh Chin, xanhchin.io" className='CoinItem inactiveCoin' />
        else if (value === "head") return <img  src={"/static/media/coin/coin-2.svg"} alt="Coin Flip Xanh Chin, Xanh Chin, xanhchin.io" className='CoinItem' />
        else return <></>
    }
    return ( 
        <div className="coinFlip_area">
            <div className="flipBox">
                <div className="coinFlipCircle">
                    {result(HiLoState.results.slice(-1)[0])}
                </div>
                <div className="coinHeadTails">
                    <div className="coinHeTe">
                        <img src={"/static/media/coin/coin-2.svg"} alt="Coin Flip Xanh Chin, Xanh Chin, xanhchin.io" /> Heads
                    </div>
                    <div className="coinHeTe">
                        <img src={"/static/media/coin/coin-1.svg"} alt="Coin Flip Xanh Chin, Xanh Chin, xanhchin.io" /> Tails
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CoinFlipBox;