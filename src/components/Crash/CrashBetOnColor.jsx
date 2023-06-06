import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { userAccount, sendTransaction } from '../../web3/testnet';

import Star from '../../assets/img/icons/star.svg';

function amountControl (value) {
    // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
    let temp = value * Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    temp = Math.floor(temp);
    temp = temp / Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    
    // now return the quantity in correct format of token precision and symbol.
    return Number.parseFloat(temp).toFixed(process.env.REACT_APP_TOKENPRECISION) + ' ' + process.env.REACT_APP_TOKENSYMBOL;
}

function CrashBetOnColor() {

    const GameState = useSelector((store) => store.game);
    const cNameOriginal = {
        red: "color_box_col",
        green: "color_box_col",
        star: "color_box_col"
    };
    const [cName, setCName] = useState(cNameOriginal);

    const [amount, setAmount] = useState(0);
    const [color, setColor] = useState("");

    function handleAmount(e) {
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setAmount(e.target.value);
    }
    function handleFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || 0);
    }
    function handleColor (value) {
        setColor(value);
        let temp = cNameOriginal;
        temp[value] = "color_box_col active";
        setCName(temp);
    }

    function trenball() {
        const transact = {
          actions: [{
            account: process.env.REACT_APP_SCROCKET, // Smart Contract Account
            name: 'trenball',   // ACTION BET
            authorization: [{
              actor: userAccount,   // User Wallet Address (Wax Cloud Wallet)
              permission: 'active',
            }],
            data: {
              wallet: userAccount,
              game_id: GameState.game_id,
              quantity:  amountControl(amount),
              side: color,
              latest: true
            },
          }]
        };
        sendTransaction(transact);
        setAmount(0);
      }

    return ( 
        <div className="CrashBeaBox">
            <div className="beatAmountRow row">
                <div className="col">
                    <div className="crashBeatOnColor">
                        <div className="beatAmount">
                            <h3>Amount</h3>
                            <div className="inputCol">
                                <input onChange={handleAmount} value={amount} onBlur = {handleFloat} />
                            </div>
                        </div>
                        <div className="beatColorBox row">
                            <div onClick={() => handleColor("red")} className="col">
                                <div className={cName.red}>
                                    <div className="color_box">
                                        <span className='red_color'></span>
                                        Red
                                    </div>
                                    <span className='color-orange'>X 1.96</span>
                                </div>
                            </div>
                            <div onClick={() => handleColor("green")} className="col">
                                <div className={cName.green} >
                                    <div className="color_box">
                                        <span className='red_green'></span>
                                        Green
                                    </div>
                                    <span className='color-orange'>X 2</span>
                                </div>
                            </div>
                            <div onClick={() => handleColor("star")} className="col">
                                <div className={cName.star}>
                                    <div className="color_box">
                                        <img src={Star} alt="star" />
                                        star
                                    </div>
                                    <span className='color-orange'>X 10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <a onClick={() => trenball()} className='BlueBtn'>Place a Bet</a>
                </div>
            </div>
        </div>
     );
}

export default CrashBetOnColor;