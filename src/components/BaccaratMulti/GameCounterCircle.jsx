import React from 'react';
import { useSelector } from 'react-redux';

function GameCounterCircle() {
    const GameState = useSelector((store) => store.game);
    return ( 
        <div className="gameCounterCircle">
            <span className="gameCounterCircleArt"></span>
            <div className="gameCounter">
                <h2>{GameState.timeLeft}</h2>
                <p>Game will be start after </p>
            </div>
        </div>
     );
}

export default GameCounterCircle;