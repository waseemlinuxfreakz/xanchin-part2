import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userAccount, updateWallet, sendTransaction } from '../../web3/testnet';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';

function amountControl (value) {
  // the first need to floor the number to make sure when we Float.toFixed it, the number is not bigger than balance.
  let temp = value * Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
  temp = Math.floor(temp);
  temp = temp / Math.pow(10, process.env.REACT_APP_TOKENPRECISION);
  
  // now return the quantity in correct format of token precision and symbol.
  return Number.parseFloat(temp).toFixed(process.env.REACT_APP_TOKENPRECISION) + ' ' + process.env.REACT_APP_TOKENSYMBOL;
}

function WithdrawPopup(props) {
    //console.log("WithdrawPopup: ", props);

    const UserState = useSelector((store) => store.user);
    if (!UserState.token) updateWallet();

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [amount, setAmount] = useState(0);

    function handleAmount(e) {
      if (e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) 
      setAmount(e.target.value);
    }
    function handleFloat(){
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setAmount(parseFloat(amount) || '');
    }

    function withdraw (e) {
      e.preventDefault();
      if (amount) {
          const transact = {
              actions: [{
                account: props.sc,
                name: 'withdraw',
                authorization: [{
                  actor: userAccount,
                  permission: 'active',
                }],
                data: {
                  wallet: userAccount,
                  quantity:  amountControl(amount)
                },
              }]
          };
          sendTransaction(transact);
          console.log(transact);
      }
  }

    return ( 
        <>

        <span className="BlueBtn WithdrawBtn" onClick={handleShow}>Withdraw</span>   
  
        <Modal className='DipoWithdeModal' show={show} onHide={handleClose} centered>
          <Modal.Body className='' >
            <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
            <div className="swapformInner">
                <form action="#">
                    <br />
                    <div className="waletInforBtn">
                      <a href="/my-wallet" className="BlueBtn"><img src={"/static/media/icons/wallet-color.svg"} alt="Walet" /> {UserState.token ? parseFloat(UserState.token).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"} </a>
                    </div>
                    <br />
                    <div className="inputCol">
                        <input type="text" onChange={handleAmount} value={amount} onBlur = {handleFloat} placeholder='Enter Withdraw amount' name='DepositeAmount' id='DepositeAmount' />
                    </div>
                    <div className="formBtn">
                        <button onClick={withdraw} className='BlueBtn'>Withdraw</button>
                    </div>
                    <br />
                </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
     );
}

export default WithdrawPopup;