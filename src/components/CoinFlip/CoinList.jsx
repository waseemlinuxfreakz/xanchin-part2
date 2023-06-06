import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import { useSelector } from 'react-redux';

import {socket} from '../../services/coinflip';
import {userAccount} from '../../web3/testnet'

import Coin1 from '../../assets/img/coin/coin-1.svg';
import Coin2 from '../../assets/img/coin/coin-2.svg';

function CoinList() {

    const HiLoState = useSelector((store) => store.hilo);

    const [history, setHistory] = useState([]);
    useEffect(() => {
        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            setHistory(args[0].results);
        });
        
        return () => {
          socket.off('RESULT');
        };
    }, []);

    function show (value) {
        if (value === "tail") return <img key={v4()} src={Coin1} alt="Coin" className='CoinItem inactiveCoin' />
        else return <img key={v4()} src={Coin2} alt="Coin" className='CoinItem' />
    }
    return (
        
        <div className="coinList">
            {HiLoState.results.slice(-10).map(value => show(value))}
        </div>
     );
}

export default CoinList;