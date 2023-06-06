import { useState } from 'react';
import { useSelector } from 'react-redux';
import { userAccount, sendTransaction } from '../../web3/testnet';

function amountControl (value) {
    // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
    let temp = value * Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    temp = Math.floor(temp);
    temp = temp / Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
    
    // now return the quantity in correct format of token precision and symbol.
    return Number.parseFloat(temp).toFixed(process.env.REACT_APP_TOKENPRECISION) + ' ' + process.env.REACT_APP_TOKENSYMBOL;
}

function CoinFlipStart() {

    const HiLoState = useSelector((store) => store.hilo);
    const [amount, setAmount] = useState(parseFloat(HiLoState.bet_amount));
    

    function handleAmount(e) {
        if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
        setAmount(parseFloat(e.target.value) ? parseFloat(e.target.value) : 0);
        //setAmount(e.target.value);
    }
    function handleFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || '');
    }

    function bet(side) {
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
            to: process.env.REACT_APP_SCCOINFLIP,
            quantity:  amountControl(amount),
            memo: 'play;' + side,
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
                    <h3>Bet Amount</h3>
                    <div className="theAmount"><input type="number" onChange={handleAmount} defaultValue={parseFloat(HiLoState.bet_amount)} onBlur = {handleFloat} />DIME</div>
                </div>
                <div className="selectRange">
                    <input type="range" />
                </div>
            </div>
            <div className="higherLower_box">
                <button onClick={() => bet('head')} className="higherLower">
                    <p>Head</p>
                    <span className='color-orange'>1.98x</span>
                </button>
                <button onClick={() => bet('tail')} className="higherLower">
                    <p>Tail</p>
                    <span className='color-orange'>1.98x</span>
                </button>
            </div>
        </div>
     );
}

export default CoinFlipStart;