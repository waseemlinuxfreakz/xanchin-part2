import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { v4 } from 'uuid';

import {socket} from '../../services/baccarat';


function UserBettingList() {
    const [bets, setBet] = useState([]);

    useEffect(() => {
        socket.on('NEW_BET', (...args) => { // {game_id: '10605', wallet: 'arvernorix12', amount: '2.0000 DIME', side: 'tie'}
            setBet([args[0], ...bets]); 
        });

        return () => {
            socket.off('NEW_BET');
        };
    });
    return ( 
        <div className="userBettingList">
            <h2>User Betting List</h2>
            <div className="bettingList">
                <table className="table">
                    <tbody>
                        {bets.map( bet => {
                            return <tr key={v4()}>
                                <td>{bet.wallet}</td>
                                <td>{bet.side}</td>
                                <td><span className='color-blue'>{bet.amount}</span></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default UserBettingList;