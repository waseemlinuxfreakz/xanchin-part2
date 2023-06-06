import React from 'react';
import { useState, useEffect } from 'react';

import {storeAppDispatch} from '../../GlobalState/Store';
import { setSide } from '../../GlobalState/GameReducer';
import {socket} from '../../services/baucua';

function GameCardList() {
    const cNameOriginal = {
        1: "gameCardItem",
        2: "gameCardItem",
        3: "gameCardItem",
        4: "gameCardItem",
        5: "gameCardItem",
        6: "gameCardItem"
    };
    const [total, setTotal] = useState({
        bau: "0.0000 DIME",
        ca: "0.0000 DIME",
        cua: "0.0000 DIME",
        ga: "0.0000 DIME",
        nai: "0.0000 DIME",
        tom: "0.0000 DIME"
    });
    const [cName, setCName] = useState(cNameOriginal);

    useEffect(() => {
        socket.on('TOTAL_BET', (...args) => {
            setTotal(args[0]);
        });
    
        return () => {
          socket.off('TOTAL_BET');
        };
    }, []);

    function side(value) {
        let temp = cNameOriginal;
        temp[value] = "gameCardItem active";
        setCName(temp);
        storeAppDispatch(setSide(value));
    }

    return ( 
        <div className="gameCardList row">
            <div className="col-4">
                <div className={cName[1]} onClick={() => side(1)}>
                    <h2>Gourd</h2>
                    <div className="gameCardItemImg">
                        <img src={"/static/media/baucua/bau.png"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />
                        <div className="gameCardNumber">{parseFloat(total.bau).toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className={cName[2]} onClick={() => side(2)}>
                    <h2>Crab</h2>
                    <div className="gameCardItemImg">
                        <img src={"/static/media/baucua/cua.png"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />
                        <div className="gameCardNumber">{parseFloat(total.cua).toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className={cName[3]} onClick={() => side(3)}>
                    <h2>Fish</h2>
                    <div className="gameCardItemImg">
                        <img src={"/static/media/baucua/ca.png"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />
                        <div className="gameCardNumber">{parseFloat(total.ca).toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className={cName[4]} onClick={() => side(4)}>
                    <h2>Roaster</h2>
                    <div className="gameCardItemImg">
                        <img src={"/static/media/baucua/ga.png"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />
                        <div className="gameCardNumber">{parseFloat(total.ga).toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className={cName[5]} onClick={() => side(5)}>
                    <h2>shrimp</h2>
                    <div className="gameCardItemImg">
                        <img src={"/static/media/baucua/tom.png"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />
                        <div className="gameCardNumber">{parseFloat(total.tom).toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className={cName[6]} onClick={() => side(6)}>
                    <h2>Deer</h2>
                    <div className="gameCardItemImg">
                        <img src={"/static/media/baucua/nai.png"} alt="Bau Cua Xanh Chin, Xanh Chin, xanhchin.io" />
                        <div className="gameCardNumber">{parseFloat(total.nai).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default GameCardList;

/*
<div className="col-2"><button onClick={() => bet('1')} className="bet-button"><div className="button-inner">Bau</div></button></div>
<div className="col-2"><button onClick={() => bet('2')} className="bet-button"><div className="button-inner">Cua</div></button></div>
<div className="col-2"><button onClick={() => bet('3')} className="bet-button"><div className="button-inner">Ca</div></button></div>
</div>
<div className="row">
<div className="col-2"><button onClick={() => bet('4')} className="bet-button"><div className="button-inner">Ga</div></button></div>
<div className="col-2"><button onClick={() => bet('5')} className="bet-button"><div className="button-inner">Tom</div></button></div>
<div className="col-2"><button onClick={() => bet('6')} className="bet-button"><div className="button-inner">Nai</div></button></div>
*/