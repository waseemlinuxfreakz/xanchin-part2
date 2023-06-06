import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {socket} from '../services/coinflip';
import {userAccount} from '../web3/testnet'
import { initialGame } from '../web3/testnet';

import { storeAppDispatch } from '../GlobalState/Store';
import { setGame } from '../GlobalState/HiLoReducer';

import Header from '../components/CoinFlip/Header';
import CoinFlipBox from '../components/CoinFlip/CoinFlipBox';
import CoinList from '../components/CoinFlip/CoinList';
import CoinFlipStart from '../components/CoinFlip/CoinFlipStart';
import CoinFlipCashOut from '../components/CoinFlip/CoinFlipCashOut';
import GameOver from '../components/GameOver';



function CoinFlip() {

    const HiLoState = useSelector((store) => store.hilo);

    useEffect(() => {
        if ( !HiLoState.player ) initialGame(process.env.REACT_APP_SCCOINFLIP);

        if (process.env.REACT_APP_CONSOLE === "on") console.log("Listening to result in CoinFlip.jsx");

        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            storeAppDispatch(setGame(args[0]));
        });
  
        return () => {
          socket.off('RESULT');
        };

    }, []);

    // used for check status game: if true => game over or user start the game first time.
    if (HiLoState.finished) {

        // User start the game first time or user Cash out
        if (HiLoState.bet_amount === 0 || HiLoState.win_multiplier > 0) {
        // if (HiLoState.bet_amount === 0 || HiLoState.results.slice(-1)[0] === HiLoState.bet_side) {
            return ( 
                <div className='PageWraper bigSmallWrap PlayCardWraper'>
                    <Header/>
                    <section className="PlayCard_area bigSmallGame_area affilate_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7">
                                    <CoinList/>
                                    <CoinFlipBox/>
                                </div>
                                <div className="col-xl-5">
                                    <CoinFlipStart/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }   else return (  // Game Over.
            <div className='PageWraper bigSmallWrap PlayCardWraper'>
                <Header/>
                <section className="PlayCard_area bigSmallGame_area affilate_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7">
                                <CoinList/>
                                <CoinFlipBox/>
                                <GameOver/>
                            </div>
                            <div className="col-xl-5">
                                <CoinFlipStart/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    } else // User Playing game.
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <Header/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CoinList/>
                            <CoinFlipBox/>
                        </div>
                        <div className="col-xl-5">
                            <CoinFlipCashOut/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CoinFlip;