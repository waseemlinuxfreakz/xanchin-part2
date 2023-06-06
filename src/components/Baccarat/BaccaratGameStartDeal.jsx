import React from 'react';
import { useState } from 'react';

function BaccaratGameStartDeal() {
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
        console.log("amount:", amount);
        setAmount(0);
    }
    function dealTheCard() {
        console.log("Deal the Card");
    }
    return ( 
        <div className="beatStartBottom BaccaratGameStart">
            <div className="flexBox">
                <div className="box2">/2</div>
                <div className="inputCol">
                    <input onChange={handleAmount} value={amount} onBlur = {handleFloat} />
                </div>
                <div className="box2">x2</div>
            </div>
            <button onClick={() => bet()} className="BlueBtn">Bet</button>
            <button onClick={() => dealTheCard()} className="RedBtn dealBtn">Deal the card</button>
        </div>
     );
}

export default BaccaratGameStartDeal;