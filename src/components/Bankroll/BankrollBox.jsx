import React from 'react';
import Bank from '../../assets/img/icons/bank.svg';
import AffilateBlue from '../../assets/img/icons/affilate-blue.svg';
import Affilate from '../../assets/img/icons/Affilate.svg';

function BankrollBox() {
    return ( 
        <div className="bankrollBox">
            <div className="bankRollTop">
                <div className="bankRollIcon">
                    <img src={Bank} alt="Bank" />
                </div>
                <div className="bankWallet">
                    <p>Total Amount</p>
                    <span className='affilate_number'>
                        <img src={AffilateBlue} alt="UserIcon" />
                        1520
                    </span>
                </div>
            </div>
            <div className="bankRollWithdrawBox">
                <div className="currentNumber">
                    <span className='affilate_number'>
                        <img src={Affilate} alt="UserIcon" /> 1520
                    </span>
                    <p>Your Amount in bankroll</p>
                </div>
                <div className="bankRollWithdraw">
                    <form action="#">
                        <div className="inputCol">
                            <input type="number"  placeholder='Enter Amount' />
                        </div>
                        <div className="dualBtn">
                            <button className='BlueBtn'>Deposite</button>
                            <button className='BlueBtn'>Withdraw</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default BankrollBox;