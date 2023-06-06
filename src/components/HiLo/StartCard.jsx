import React from 'react';
import { useState, useEffect } from 'react';

import {socket} from '../../services/hilo';
import {userAccount , sendTransaction} from '../../web3/testnet'



function amountControl (value) {
  // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
  let temp = value * Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
  temp = Math.floor(temp);
  temp = temp / Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
  
  // now return the quantity in correct format of token precision and symbol.
  return Number.parseFloat(temp).toFixed(process.env.REACT_APP_TOKENPRECISION) + ' ' + process.env.REACT_APP_TOKENSYMBOL;
}

function StartCard() {

    const [amount, setAmount] = useState(0);

    function handleAmount(e) {
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setAmount(e.target.value);
    }
    function handleFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || '');
    }

    function start() {
      const transact = {
        actions: [{
            account: process.env.REACT_APP_TOKENCONTRACT,
            name: 'transfer',
            authorization: [{
            actor: userAccount,
            permission: 'active',
            }],
            data: {
            from: userAccount,
            to: process.env.REACT_APP_SCHI,
            quantity:  amountControl(amount),
            memo: 'open',
            },
        }]
        };
        console.log(transact);
        sendTransaction(transact);
    }

    return ( 
        <div className="startCard_area">
            <div className="select_range_area">
                <div className="play_amount">
                    <h3>Bet Amount</h3>
                    <div className="theAmount"><input onChange={handleAmount} value={amount} onBlur = {handleFloat} />DIME</div>
                </div>
            </div>
            <div className="higherLower_box">
            </div>
            <a onClick={() => start()} className='BlueBtn'>Start Game</a>
        </div>
     );
}

export default StartCard;

/*
function start(e) {
    e.preventDefault();
    const transact = {
      actions: [{
          account: process.env.REACT_APP_CONTRACT,
          name: 'transfer',
          authorization: [{
          actor: userAccount,
          permission: 'active',
          }],
          data: {
          from: userAccount,
          to: process.env.REACT_APP_SCHILO,
          quantity:  amountControl(amount),
          memo: 'open',
          },
      }]
      };
      console.log(transact);
      sendTransaction(transact);
  }

  function bet(side) {
    const transact = {
      actions: [{
        account: process.env.REACT_APP_SCHILO, // Smart Contract Account 
        name: 'playgame',   // ACTION BET
        authorization: [{
          actor: userAccount,   // User Wallet Address (Wax Cloud Wallet)
          permission: 'active',
        }],
        data: {
          player: userAccount,
          side: side //
        },
      }]
    };
    console.log(transact);
    sendTransaction(transact);
  }
  function cashOut() {
    const transact = {
      actions: [{
        account: process.env.REACT_APP_SCHILO, // Smart Contract Account
        name: 'finishgame',          // ACTION BET
        authorization: [{
          actor: userAccount,   // User Wallet Address (Wax Cloud Wallet)
          permission: 'active',
        }],
        data: {
          player: userAccount
        },
      }]
    };
    console.log(transact);
    sendTransaction(transact);
  }

  <button onClick={start} className="bet-button"><div className="button-inner"><div>Start Game</div></div></button>
      <br/><br/>
      <button onClick={cashOut} className="bet-button"><div className="button-inner"><div>Cash Out</div></div></button>
      <br/><br/>
      <div className="row">
        <div className="col-2"><div className="bet-item">
            <button onClick={() => bet(true)} className="bet-button"><div className="button-inner"><div>High</div></div></button>
          </div>
        </div>
        <div className="col-2">
          <div className="bet-item">
            <button onClick={() => bet(false)} className="bet-button"><div className="button-inner"><div>Low</div></div></button>
          </div>
        </div>
      </div>
 */