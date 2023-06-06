import React from 'react';

import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {socket} from '../../services/classicdice';
import {userAccount} from '../../web3/testnet'

// socket.emit("join", {"player": userAccount});

function UserBettingList(props) {

    return ( 
        <div className="userBettingList">
            <h2>User Betting List</h2>
            <div className="ClassList bettingList">
                <table className="table">
                    <tbody>
                        { props.bets.map(bet => {
                            return <tr key={v4()}>
                                        <td>{bet.player}</td>
                                        <td>{bet.bet_side} {bet.bet_value} </td>
                                        <td><span className='color-blue'>{bet.accept_bet_amount}</span></td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default UserBettingList;