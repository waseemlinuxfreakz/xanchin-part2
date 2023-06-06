import React from 'react';
import { v4 } from 'uuid';

function CrashUserBettingValue(props) {

    function show (bet) {
        if (bet.side === "cash")
        return  <tr key={v4()}>
                    <td>{bet.wallet}</td>
                    <td>{bet.bet_point}</td>
                    <td><span className='color-blue'>{bet.amount}</span></td>
                </tr>
        else return ;
    }
    return ( 
        <div className="carshBearList userBettingList">
            <h2>User Betting List <span className='color-orange'>Bet On Value</span></h2>
            <div className="bettingList">
                <table className="table">
                    <tbody>
                        {props.list.map(bet => show(bet))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CrashUserBettingValue;