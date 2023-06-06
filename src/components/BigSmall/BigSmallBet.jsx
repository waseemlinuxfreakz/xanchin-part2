import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import {storeAppDispatch} from '../../GlobalState/Store';
import { setStatus } from '../../GlobalState/GameReducer';

import {socket} from '../../services/taixiu';

import BetStart from './BetStart';
import BetStart2 from './BetStart2';

import GameRoundStart from './GameRoundStart';
import BigBet from './BigBet';
import SmallBet from './SmallBet';
import BeatRank from '../../components/BeatRank';



function BigSmallBet() {
    // round have 3 values: COUNTDOWN, WAITING, RESULT
    // const [round, setRound] = useState("WAITING");
    const GameState = useSelector((store) => store.game);

    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);
    

    function circle (value) {
        if (value === "xiu") return <span title="XIU" key={v4()} className="colorCircleItem redCircle"></span>
            else return <span title="TAI" key={v4()} className="colorCircleItem yellowCircle"></span>
    }
    console.log("RUN CHECK");
    useEffect(() => {
        socket.on('COUNTDOWN', (...args) => {
            storeAppDispatch(setStatus('COUNTDOWN'));
            if ( args[0].timeleft === 0) storeAppDispatch(setStatus('WAITING'));
        });

        socket.on('RESULT', (...args) => {
            setResult(args[0]);
            storeAppDispatch(setStatus('RESULT'));
            let temp = history;
            temp.push(args[0].won_side);
            temp = temp.slice(-10);
            setHistory(temp);
        });
    
        return () => {
          socket.off('COUNTDOWN');
          socket.off('RESULT');
        };
    }, []);

    if (GameState.status == 'COUNTDOWN') 
    return ( 
        <div className="bigsmallBet">
            <BeatRank />
            <div className="betResult">
                <div className="color_circle">
                    {history.map( game => {
                                return circle(game);
                            }
                    )}
                </div>
                <BetStart />
            </div>
            <div className="betrow row">
                <div className="col-6">
                    <BigBet/>
                </div>
                <div className="col-6">
                    <SmallBet/>
                </div>
            </div>
        </div>
    ); else if (GameState.status == 'WAITING') {
        return ( 
            <div className="bigsmallBet">
                <BeatRank />
                <div className="betResult">
                <div className="color_circle">
                    {history.map( game => {
                                return circle(game);
                            }
                    )}
                </div>
                    <BetStart2/>
                </div>
                <div className="betrow row">
                    <div className="col-6">
                        <BigBet/>
                    </div>
                    <div className="col-6">
                        <SmallBet/>
                    </div>
                </div>
            </div>
         );
    } else 

    return ( 
        <div className="bigsmallBet">
            <BeatRank />
            <div className="betResult">
                <div className="color_circle">
                    {history.map( game => {
                                return circle(game);
                            }
                    )}
                </div>
                <GameRoundStart result={result}/>
            </div>
            <div className="betrow row">
                <div className="col-6">
                    <BigBet/>
                </div>
                <div className="col-6">
                    <SmallBet/>
                </div>
            </div>
        </div>
     );
}

export default BigSmallBet;