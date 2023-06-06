import React from 'react';
import { useState } from 'react';

function CrashBeTop ({side, chooseSide}) {
    //const [side, setSide] = useState(1);
    return ( 
        <div className="CrashBeaTop">
            <div className="radioBox">
                <input type="radio" name='BeatOn' id='BeatOnValue' checked={side === 1} onClick={() => chooseSide(1)} onChange={() => chooseSide(1)}/>
                <label htmlFor="BeatOnValue"><span className='radioCircle'></span>   Bet On Value</label>
            </div>
            <div className="radioBox">
                <input type="radio" name='BeatOn' id='BeatOnColor' checked={side === 2} onClick={() => chooseSide(2)} onChange={() => chooseSide(2)}/>
                <label htmlFor="BeatOnColor"><span className='radioCircle'></span>   Bet On Color</label>
            </div>
        </div>
     );
}

export default CrashBeTop ;