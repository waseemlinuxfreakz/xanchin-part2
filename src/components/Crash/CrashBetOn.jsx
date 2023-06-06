import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { userAccount, sendTransaction } from '../../web3/testnet';

function amountControl (value) {
    // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
    let temp = value * Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    temp = Math.floor(temp);
    temp = temp / Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    
    // now return the quantity in correct format of token precision and symbol.
    return Number.parseFloat(temp).toFixed(process.env.REACT_APP_TOKENPRECISION) + ' ' + process.env.REACT_APP_TOKENSYMBOL;
}

function CrashBeatOn() {

    const GameState = useSelector((store) => store.game);

    const [amount, setAmount] = useState(0);
    const [cashOut, setCashOut] = useState(2);

    function handleAmount(e) {
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setAmount(e.target.value);
    }
    function handleFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || 0);
    }
    function handleCashOut(e) {
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setCashOut(e.target.value);
    }
    function cashOutFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setCashOut(parseFloat(cashOut) || 2);
    }
    

    function cash() {
        const transact = {
          actions: [{
            account: process.env.REACT_APP_SCROCKET, // Smart Contract Account
            name: 'cash',   // ACTION BET
            authorization: [{
              actor: userAccount,   // User Wallet Address (Wax Cloud Wallet)
              permission: 'active',
            }],
            data: {
              wallet: userAccount,
              game_id: GameState.game_id,
              quantity:  amountControl(amount),
              bet_point: cashOut, //
              latest: true
            },
          }]
        };
        sendTransaction(transact);
        setAmount(0);
    }

    function divide() {
        setAmount(amount/2);
    }
    function multiply() {
        setAmount(amount*2);
    }

    return ( 
        <div className="CrashBeaBox">
            <div className="beatAmountRow row">
                <div className="col">
                    <div className="crashBeatOn crashBeatOnAmount">
                        <div className="select_range_area">
                            <div className="play_amount beatStartBottom">
                                <h3>Amount</h3>
                                <div className="box2">/2</div>
                                <div className="inputCol"><input onChange={handleAmount} value={amount} onBlur = {handleFloat} /></div>
                                <div className="box2">x2</div>
                            </div>
                            <div className="selectRange"><input type="range"/></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="crashBeatOn">
                        <div className="select_range_area">
                            <div className="play_amount">
                                <h3>Cash Out</h3>
                                <div className="theAmount theAmountx">
                                    <input onChange={handleCashOut} value={cashOut} onBlur = {cashOutFloat} /> <span>x</span>
                                </div>
                            </div>
                            <div className="selectRange"><input type="range" min="1.01" max="400" onChange={handleCashOut} value={cashOut}/></div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <a onClick={() => cash()} className='BlueBtn'>Place a Bet</a>
                </div>
            </div>
        </div>
     );
}

export default CrashBeatOn;