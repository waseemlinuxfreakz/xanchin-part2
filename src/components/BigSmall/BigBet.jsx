import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { userAccount, sendTransaction } from '../../web3/testnet';
import {socket} from '../../services/taixiu';

function amountControl (value) {
    // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
    let temp = value * Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    temp = Math.floor(temp);
    temp = temp / Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    
    // now return the quantity in correct format of token precision and symbol.
    return Number.parseFloat(temp).toFixed(process.env.REACT_APP_TOKENPRECISION) + ' ' + process.env.REACT_APP_TOKENSYMBOL;
}

function BigBet() {
    const GameState = useSelector((store) => store.game);

    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        socket.on('TOTAL_BET', (...args) => {
            setTotal(args[0].tai);
        });
        return () => {
          socket.off('TOTAL_BET');
        };
    }, []);

    function handleAmount(e) {
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setAmount(e.target.value);
    }
    function handleFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || '');
    }

    function bet(side) {
        const transact = {
          actions: [{
            account: process.env.REACT_APP_SCTAIXIU, // Smart Contract Account
            name: 'bet',   // ACTION BET
            authorization: [{
              actor: userAccount,   // User Wallet Address (Wax Cloud Wallet)
              permission: 'active',
            }],
            data: {
              wallet: userAccount,
              game_id: GameState.game_id,  // set this to game_id or -1
              quantity:  amountControl(amount),
              side: 'tai', //
              latest: true
            },
          }]
        };
    
        console.log(transact);
        sendTransaction(transact);
        setAmount(0);
    }

    return ( 
        <div className="betColBox">
            <div className="betTitle">
                Tai
            </div>
            <div className="betUser">
                {parseFloat(total).toFixed(2)}
                {/*<span className='color-ornage'>650 user</span> */}
            </div>
            <div className="betCounters inputCol">
                <input onChange={handleAmount} value={amount} onBlur = {handleFloat} />
            </div>
            <button onClick={() => bet()} type='button' className='BlueBtn'>Bet</button>
        </div>
     );
}

export default BigBet;