import React from 'react';
import { useState, useEffect, useRef } from 'react';

import {storeAppDispatch} from '../../GlobalState/Store';
import { setSide } from '../../GlobalState/GameReducer';
import {socket} from '../../services/baccarat';


import BlockLeft from '../../assets/img/block_left.png';
import BlockLeft2 from '../../assets/img/block_left_2.png';
import BlockRight from '../../assets/img/block_right.png';
import BlockRight2 from '../../assets/img/block_right_2.png';
import BlockTop from '../../assets/img/block_top.png';
import BlockTop2 from '../../assets/img/block_top_2.png';


// Update TOTAL BET in here
function BaccaratPlayerBanker() {

    const cNameOriginal = {
        1: "BaccaratBlock BaccaratBlockLeft",
        2: "BaccaratBlock BaccaratBlockRight",
        3: "BaccaratBlock BaccaratBlockTop",
        4: "BaccaratBlock",
        5: "BaccaratBlock"
    };
    const [cName, setCName] = useState(cNameOriginal);

    const [total, setTotal] = useState({
        banker : "0.0000 DIME", 
        banker_pair : "0.0000 DIME",
        player : "0.0000 DIME",
        player_pair : "0.0000 DIME",
        tie : "0.0000 DIME"
    });

    useEffect(() => {
        socket.on('TOTAL_BET', (...args) => {
            setTotal(args[0]);
        });

        return () => {
            socket.off('TOTAL_BET');
        };
    });

    function side(value) {
        let temp = cNameOriginal;
        temp[value] = temp[value] + " active";
        setCName(temp);
        storeAppDispatch(setSide(value));
    }

    return ( 
        <div className="baccaratPlayerBanker">
            <div className="row">
                <div onClick={() => side("1")} className="col-md-3 col-6">
                    <div className={cName[1]}>
                        <img src={BlockLeft} alt="" className="bg_art BlockLeft1" />
                        <img src={BlockLeft2} alt="" className="bg_art BlockLeft2" />
                        <div className="BaccaratBlockTitle">
                            <h2>PLAYER</h2>
                            <span className='color-orange'>x 2.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            {parseFloat(total.player).toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div onClick={() => side("3")} className={cName[3]}>
                        <img src={BlockTop} alt="" className="bg_art BlockTop1" />
                        <img src={BlockTop2} alt="" className="bg_art BlockTop2" />
                        <div className="BaccaratBlockTitle">
                            <h2>TIE</h2>
                            <span className='color-orange'>x 9.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            {parseFloat(total.tie).toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={() => side("4")} className={"col-6"}>
                            <div className={cName[4]}>
                                <div className="BaccaratBlockTitle">
                                    <h2>P PAIR</h2>
                                    <span className='color-orange'>x 12.00</span>
                                </div>
                                <div className="BaccaratBlockBottom">
                                    {parseFloat(total.player_pair).toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <div onClick={() => side("5")} className="col-6">
                            <div className={cName[5]}>
                                <div className="BaccaratBlockTitle">
                                    <h2>B PAIR</h2>
                                    <span className='color-orange'>x 12.00</span>
                                </div>
                                <div className="BaccaratBlockBottom">
                                    {parseFloat(total.banker_pair).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => side("2")} className="col-md-3 col-6">
                    <div className={cName[2]}>
                        <img src={BlockRight} alt="" className="bg_art BlockRight1" />
                        <img src={BlockRight2} alt="" className="bg_art BlockRight2" />
                        <div className="BaccaratBlockTitle">
                            <h2>BANKER</h2>
                            <span className='color-orange'>x 1.95</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            {parseFloat(total.banker).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default BaccaratPlayerBanker;