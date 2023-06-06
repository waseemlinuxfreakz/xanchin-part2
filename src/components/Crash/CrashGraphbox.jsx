import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {socket} from '../../services/crash';

import BeatRank from '../BeatRank';
import Graph from '../../assets/img/graph/graph_line.png';
import BetColorList from './BetColorList';

// Status: COUNTING, WAITING, RESULT.

function amountControl (value) {
    // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
    let temp = value * Math.pow(10, 2);
    temp = Math.floor(temp);
    temp = temp / Math.pow(10, 2);
    
    // now return the quantity in correct format of token precision and symbol.
    return Number.parseFloat(temp).toFixed(2);
  }

function CrashGraphbox() {

    const GameState = useSelector((store) => store.game);
    
    const [result, setResult] = useState(0);
    const [status, setStatus] = useState("WAITING");
    const [history, setHistory] = useState([]);
    
    useEffect(() => {
        socket.on('COUNTDOWN', (...args) => {
            setStatus("COUNTING")
            if (args[0].timeleft === 0) setStatus("WAITING");
        });

        socket.on('RESULT', (...args) => {
            setResult(amountControl(args[0].result));
            setStatus("RESULT")

            let temp = history; 
            temp.push(amountControl(args[0].result));
            temp = temp.slice(-10);
            setHistory(temp);
        });
        return () => {
          socket.off('COUNTDOWN');
          socket.off('RESULT');
        };
    }, []);

    if (GameState.timeLeft > 0)
    return (
        <div className="crashGraphBox bigsmallBet">
            <BeatRank />
            <br />
            <div className="crashGraphInner">
                <BetColorList history={history}/>
                <div className="graphBox">
                    <img src={Graph} alt="Graph" className='grapgLine' />
                    <div className="gameCounter game_Counter">
                        <h2 className="">{GameState.timeLeft}</h2>
                        <p>Game Round will be closed after </p>
                    </div>
                </div>
            </div>
        </div>
    );
    else if (status === "WAITING")
    return (
        <div className="crashGraphBox bigsmallBet">
            <BeatRank />
            <br />
            <div className="crashGraphInner">
                <BetColorList history={history}/>
                <div className="graphBox">
                    <img src={Graph} alt="Graph" className='grapgLine' />
                    <div className="gameCounter game_Counter">
                        <h3 className="">Waiting for result</h3>
                    </div>
                </div>
            </div>
        </div>
    );  else
    return (
        <div className="crashGraphBox bigsmallBet">
            <BeatRank />
            <br />
            <div className="crashGraphInner">
                <BetColorList history={history}/>
                <div className="graphBox">
                    <img src={Graph} alt="Graph" className='grapgLine' />
                    <div className="carshWin">
                        Crash @{result}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrashGraphbox;