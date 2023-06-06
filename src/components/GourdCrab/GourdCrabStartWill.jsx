import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


import {storeAppDispatch} from '../../GlobalState/Store';
import { setStatus } from '../../GlobalState/GameReducer';

import {socket} from '../../services/baucua';

function dice (v) {
    if (v) return <img src={"/static/media/baucua/" + v + ".svg"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />
    else return <></>
}

function GourdCrabStartWill() {

    const GameState = useSelector((store) => store.game);

    const [time, setTime] = useState(0);
    const [result, setResult] = useState({
        result1: 0, result2: 0, result3: 0
    });

    useEffect(() => {

        socket.on('COUNTDOWN', (...args) => {
            storeAppDispatch(setStatus('COUNTDOWN'));
            setTime(args[0].timeleft);
            if ( args[0].timeleft === 0) storeAppDispatch(setStatus('WAITING'));
        });
        socket.on('RESULT', (...args) => {
            storeAppDispatch(setStatus('RESULT'));
            setResult(args[0]);
        });

        return () => {
          socket.off('COUNTDOWN');
          socket.off('RESULT');
        };
    }, []);

    return ( 
        <div className="gameCardStart">
            <div className="gameCounter">
                <h2 className=''>{time}</h2>
                <p>Game will be start after </p>
            </div>
            <div className="gameStartCardBox">
                <div className="gameWillCard">
                <div class="image-fader">
  <img src={"/static/media/baucua/1.svg"} />
  <img src={"/static/media/baucua/2.svg"} />
  <img src={"/static/media/baucua/3.svg"} />
  <img src={"/static/media/baucua/4.svg"} />
  <img src={"/static/media/baucua/5.svg"} />
  <img src={"/static/media/baucua/6.svg"} />
</div>
                </div>
                <div className="gameWillCard">
                <div class="image-fader">
  <img src={"/static/media/baucua/1.svg"} />
  <img src={"/static/media/baucua/2.svg"} />
  <img src={"/static/media/baucua/3.svg"} />
  <img src={"/static/media/baucua/4.svg"} />
  <img src={"/static/media/baucua/5.svg"} />
  <img src={"/static/media/baucua/6.svg"} />
</div>
                </div>
                <div className="gameWillCard">
                <div class="image-fader">
  <img src={"/static/media/baucua/1.svg"} />
  <img src={"/static/media/baucua/2.svg"} />
  <img src={"/static/media/baucua/3.svg"} />
  <img src={"/static/media/baucua/4.svg"} />
  <img src={"/static/media/baucua/5.svg"} />
  <img src={"/static/media/baucua/6.svg"} />
</div>
                </div>
            </div>
        </div>
     );
}

export default GourdCrabStartWill;

// https://stackoverflow.com/questions/60748752/change-an-image-after-some-time

// <img src={"/static/media/baucua/1.svg"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />

<div class="image-fader">
  <img src={"/static/media/baucua/1.svg"} />
  <img src={"/static/media/baucua/2.svg"} />
  <img src={"/static/media/baucua/3.svg"} />
  <img src={"/static/media/baucua/4.svg"} />
</div>