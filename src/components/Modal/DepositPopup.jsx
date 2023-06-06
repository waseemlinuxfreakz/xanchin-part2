import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userAccount, updateWallet, sendTransaction } from '../../web3/testnet';

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

function DepositPopup(props) {

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

    function send(e) {
      e.preventDefault();
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
              to: props.sc,
              quantity:  amountControl(amount),
              memo: "deposit",
              },
          }]
          };
      sendTransaction(transact);
  }

    return ( 
        <>

        <span className="BlueBtn dipositBtn" onClick={handleShow}>Deposit</span>   
  
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
                        <input type="text" placeholder='Enter Deposite amount' onChange={handleAmount} value={amount} onBlur = {handleFloat} name='DepositeAmount' id='DepositeAmount' />
                    </div>
                    <div className="formBtn">
                        <button onClick={send} className='BlueBtn'>Deposit</button>
                    </div>
                    <br />
                </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
     );
}

export default DepositPopup;