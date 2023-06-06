import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {socket} from '../../services/xocdia';

function GameCardStartWill() {

    const GameState = useSelector((store) => store.game);
    const [result, setResult] = useState({result1: 0, result2: 0, result3: 0, result4: 0});

    useEffect(() => {
        socket.on('RESULT', (...args) => {
            setResult(args[0]);
        });
        return () => {
          socket.off('RESULT');
        };
    }, []);

    function openBowl (value) {
        if (value === 1) return <div className="dottedItem blackDotted"><span></span></div>
        else if (value === 2) return <div className="dottedItem"><span></span></div>
        else return <span></span>
    }

    return ( 
        <div className="gameCardStart">
            <div className="gameCounter">
                <h2 className=''>{GameState.timeLeft}</h2>
                <p>Game will be start after </p>
            </div>
            <div className="gameStartCardBox">
                <div className="verticalDotList">
                    {openBowl(result.result1)}
                    {openBowl(result.result2)}
                    {openBowl(result.result3)}
                    {openBowl(result.result4)}
                </div>
            </div>
        </div>
     );
}

export default GameCardStartWill;