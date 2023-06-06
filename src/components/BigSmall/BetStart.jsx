import React from 'react';
import { useSelector } from 'react-redux';

function BetStart() {

    const GameState = useSelector((store) => store.game);
    
    return ( 
        <div className="gameWill">
            <div className="gameCounter">
                <h2 className=''>{GameState.timeLeft}</h2>
                <p>Game will be start after </p>
            </div>
        </div>
     );
}

export default BetStart;