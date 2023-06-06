import React from 'react';
import { useSelector } from 'react-redux';

import { userAccount, sendTransaction } from '../../web3/testnet';


function CoinFlipCashOut() {

    const HiLoState = useSelector((store) => store.hilo);

    function bet(side) {
        const transact = {
            actions: [{
            account: process.env.REACT_APP_SCCOINFLIP,
            name: 'playgame',
            authorization: [{
                actor: userAccount,
                permission: 'active',
            }],
            data: {
                player: userAccount,
                side: side
            },
            }]
        };
        // console.log(transact);
        sendTransaction(transact);
    }
    function cashOut() {
        const transact = {
            actions: [{
            account: process.env.REACT_APP_SCCOINFLIP,
            name: 'finishgame',
            authorization: [{
                actor: userAccount,
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
                    <div className="theAmount">{HiLoState.bet_amount}</div>
                </div>
            </div>
            <div className="higherLower_box">
                <button onClick={() => bet('head')} className="higherLower">
                    <p>Head</p>
                    <span className='color-orange'>2X</span>
                </button>
                <button onClick={() => bet('tail')} className="higherLower">
                    <p>Tail</p>
                    <span className='color-orange'>2X</span>
                </button>
            </div>
            <a onClick={() => cashOut()} className='BlueBtn'>Cashout</a>
        </div>
     );
}

export default CoinFlipCashOut;