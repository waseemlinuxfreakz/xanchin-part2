import React from 'react';
import { v4 } from 'uuid';

function CrashUserBettingColor(props) {
    //console.log("props.list: ", props.list);
    function show (bet) {
        if (bet.side !== "cash")
        return  <tr key={v4()}>
                    <td>{bet.wallet}</td>
                    <td>{bet.side}</td>
                    <td><span className='color-blue'>{bet.amount}</span></td>
                </tr>
        else return ;
    }
    return ( 
        <div className="carshBearList userBettingList">
            <h2>User Betting List <span className='color-orange'>Bet On Color</span></h2>
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

export default CrashUserBettingColor;