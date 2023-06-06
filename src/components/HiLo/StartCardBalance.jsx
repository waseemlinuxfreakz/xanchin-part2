import React from 'react';
import { useSelector } from 'react-redux';
import {userAccount , sendTransaction} from '../../web3/testnet'

function StartCardBalance() {

    const HiLoState = useSelector((store) => store.hilo);
    const multiplier = [12.8739, 6.4369, 4.2894, 3.2174, 2.5741, 2.1452, 1.8384, 1.6087, 1.43, 1.2871, 1.1699, 1.0725, 1.0725];

    function bet(side) {
        const transact = {
            actions: [{
              account: process.env.REACT_APP_SCHI, // Smart Contract Account 
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
        // console.log(transact);
        sendTransaction(transact);
    }

    function cashOut() {
        const transact = {
            actions: [{
              account: process.env.REACT_APP_SCHI, // Smart Contract Account
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
        // console.log(transact);
        sendTransaction(transact);
    }

    return ( 
        <div className="startCard_area">
            <div className="select_range_area">
                <div className="play_amount">
                    <h3>Balance</h3>
                    <div className="theAmount"><input type="number" placeholder='10.12345678' />DIME</div>
                </div>
                <div className="selectRange">
                    <input type="range" />
                </div>
            </div>
            <div className="higherLower_box">
                <button onClick={() => bet(true)} className="higherLower">
                    <p>Higher</p>
                    <span className='color-orange'>{HiLoState.results.slice(-1)[0] ? multiplier[13 - HiLoState.results.slice(-1)[0].key] : <></>}x</span>
                </button>
                <button onClick={() => bet(false)} className="higherLower">
                    <p>Lower</p>
                    <span className='color-orange'>{HiLoState.results.slice(-1)[0] ? multiplier[HiLoState.results.slice(-1)[0].key - 1] : <></>}x</span>
                </button>
            </div>
            <a onClick={() => cashOut()} className='BlueBtn'>Cashout</a>
        </div>
     );
}

export default StartCardBalance;