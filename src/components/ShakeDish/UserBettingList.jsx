import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {socket} from '../../services/xocdia';

function UserBettingList() {
    const [bets, setBet] = useState([]);

    useEffect(() => {
        
        socket.on('NEW_BET', (...args) => {
            setBet([args[0], ...bets]);
        });
        
        return () => {
            socket.off('NEW_BET');
        };
    });
    
    function showBowl (value) {
        if (value === "ba_den") 
            return  <td>
                        <div className="dottedList">
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                        </div>
                    </td>
        else if (value === "ba_trang")
            return  <td>
                        <div className="dottedList">
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                        </div>
                    </td>
        else if (value === "bon_den")
            return  <td>
                        <div className="dottedList">
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                        </div>
                    </td>
        else if (value === "bon_trang")
            return  <td>
                        <div className="dottedList">
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                        </div>
                    </td>
        else if (value === "bon_trang_hoac_bon_den")
            return <td>
                        <div className="dottedList">
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                        </div>
                    </td>
        else if (value === "chan")
            return  <td>
                        <div className="dottedList">
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                        </div>
                    </td>
        else if (value === "hai_trang_hai_den")
            return  <td>
                        <div className="dottedList">
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                        </div>
                    </td>
        else if (value === "le")
            return  <td>
                        <div className="dottedList">
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem'><span></span></div>
                            <div className='dottedItem blackDotted'><span></span></div>
                        </div>
                    </td>
    }
    return ( 
        <div className="userBettingList">
            <h2>User Betting List</h2>
            <div className="bettingList">
                <table className="table">
                    <tbody>
                        {bets.map(bet => {
                            return <tr key={v4()}>
                                        <td>{bet.wallet}</td>
                                        {showBowl(bet.side)}
                                        <td><span className='color-blue'>{parseFloat(bet.amount).toFixed(2)}</span></td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default UserBettingList;