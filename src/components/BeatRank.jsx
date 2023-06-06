import React from 'react';
import { useSelector } from 'react-redux';

function BeatRank() {
    const GameState = useSelector((store) => store.game);
    return ( 
        <span className='beatRankg'>#{GameState.game_id}</span>
     );
}

export default BeatRank;