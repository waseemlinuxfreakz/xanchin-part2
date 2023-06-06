import React from 'react';
import { useState, useEffect } from 'react';
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

function BetStart() {

    const GameState = useSelector((store) => store.game);
    const [amount, setAmount] = useState(0);

    function handleAmount(e) {
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setAmount(e.target.value);
    }
    function handleFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || '');
    }

    function bet() {
        const transact = {
          actions: [{
            account: process.env.REACT_APP_SCXOCDIA, // Smart Contract Account
            name: 'newbet',   // ACTION BET
            authorization: [{
              actor: userAccount,
              permission: 'active',
            }],
            data: {
              wallet: userAccount,
              game_id: GameState.game_id,
              quantity:  amountControl(amount),
              side: GameState.side, //
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
        <div className="beatStartBottom">
            <div onClick={() => divide()} className="box2">/2</div>
            <div className="inputCol">
                <input onChange={handleAmount} value={amount} onBlur = {handleFloat} />
            </div>
            <div onClick={() => multiply()} className="box2">x2</div>
            <button onClick={() => bet()} className="BlueBtn">Bet</button>
        </div>
     );
}

export default BetStart;