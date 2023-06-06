import React from 'react';
import { useState, useEffect } from 'react';

import {socket} from '../../services/xocdia';
import {storeAppDispatch} from '../../GlobalState/Store';
import { setSide } from '../../GlobalState/GameReducer';

function ShakeDishCard() {
    const cNameOriginal = {
        1: "gameCardItem shakeDishCard",
        2: "gameCardItem shakeDishCard",
        3: "gameCardItem shakeDishCard",
        4: "gameCardItem shakeDishCard",
        5: "gameCardItem shakeDishCard",
        6: "gameCardItem shakeDishCard",
        7: "gameCardItem shakeDishCard",
        8: "gameCardItem shakeDishCard"
    };
    const [cName, setCName] = useState(cNameOriginal);
    const [total, setTotal] = useState({
        ba_den: "0.0000 DIME",
        ba_trang: "0.0000 DIME",
        bon_den: "0.0000 DIME",
        bon_trang: "0.0000 DIME",
        bon_trang_hoac_bon_den: "0.0000 DIME",
        chan : "0.0000 DIME",
        hai_trang_hai_den : "0.0000 DIME",
        le : "0.0000 DIME"
    });

    useEffect(() => {
        socket.on('TOTAL_BET', (...args) => {
            setTotal(args[0]);
        });

        return () => {
            socket.off('TOTAL_BET');
        };
    });

    function side (value) {
        let temp = cNameOriginal;
        temp[value] = "gameCardItem shakeDishCard active";
        setCName(temp);
        storeAppDispatch(setSide(value));
    }
    return ( 
        <div className="ShakeDishCardRow gameCardList row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(8)} className={cName[8]}>
                    <div className="cardNumber">{parseFloat(total.le).toFixed(2)}</div>
                    <h3>Odd (Lẻ)</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                        </ul>
                        <div className="lineOr"><span>Or</span></div>
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(7)} className={cName[7]}>
                    <div className="cardNumber">{parseFloat(total.chan).toFixed(2)}</div>
                    <h3>Even (Chẵn)</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(6)} className={cName[6]}>
                    <div className="cardNumber">{parseFloat(total.bon_trang_hoac_bon_den).toFixed(2)}</div>
                    <h3>Tứ Tử</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                        </ul>
                        <div className="lineOr"><span>Or</span></div>
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(5)} className={cName[5]}>
                    <div className="cardNumber">{parseFloat(total.hai_trang_hai_den).toFixed(2)}</div>
                    <h3>2 trắng</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(4)} className={cName[4]}>
                    <div className="cardNumber">{parseFloat(total.ba_den).toFixed(2)}</div>
                    <h3>Even</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott '></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(3)} className={cName[3]}>
                    <div className="cardNumber">{parseFloat(total.ba_trang).toFixed(2)}</div>
                    <h3>Even</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(2)} className={cName[2]}>
                    <div className="cardNumber">{parseFloat(total.bon_den).toFixed(2)}</div>
                    <h3>Tứ tử Đen</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott BlackDot'></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div onClick={() => side(1)} className={cName[1]}>
                    <div className="cardNumber">{parseFloat(total.bon_trang).toFixed(2)}</div>
                    <h3>Tứ tử Trắng</h3>
                    <div className="cardDotted">
                        <ul className="cardDotList">
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                            <li className='dottCol'>
                                <span className='cardDott'></span>
                            </li>
                        </ul>
                    </div>
                    <div className="color-orange">x 1.95</div>
                </div>
            </div>
        </div>
     );
}

export default ShakeDishCard;

