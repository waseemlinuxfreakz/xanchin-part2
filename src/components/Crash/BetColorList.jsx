import React from 'react';
import { v4 } from 'uuid';

import Star from '../../assets/img/icons/star.svg';

function BetColorList(props) {
    function show (value) {
        if (value < 2) 
            return  <li key={v4()} className='colorCol col-2'>
                        <div className="colorBeatItem colorRed">
                            <span className='colorCircle '></span> {value}x
                        </div>
                    </li>

        else if (value >= 10)
            return  <li key={v4()} className='colorCol col-2'>
                        <div className="colorBeatItem starColor">
                            <img src={Star} alt="Star" /> {value}x
                        </div>
                    </li>

        else return <li key={v4()} className='colorCol col-2'>
                        <div className="colorBeatItem ColorYellow">
                            <span className='colorCircle '></span> {value}x
                        </div>
                    </li>
    }
    return ( 
        <ul className="beatColorLst row">
            {props.history.map(value => show(value))}
        </ul>
     );
}

export default BetColorList;