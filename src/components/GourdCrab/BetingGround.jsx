import React from 'react';
import { useState, useEffect } from 'react';

import {socket} from '../../services/baucua';

import BeatRank from '../BeatRank';
import GourdCrabList from './GourdCrabList';


function BeatingGround({chooseSide}) {
    const [id, setId] = useState(0);

    useEffect(() => {
        socket.on('COUNTDOWN', (...args) => {
            setId(args[0].game_id);
        });

        return () => {
          socket.off('COUNTDOWN');
        };
    }, []);
    return ( 
        <div className="bigsmallBet">
            <BeatRank rank={id}/>
            <GourdCrabList chooseSide={chooseSide}/>
        </div>
     );
}

export default BeatingGround;