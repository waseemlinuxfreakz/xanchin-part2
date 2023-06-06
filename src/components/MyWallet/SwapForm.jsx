import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';


function SwapForm() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>

        <a  className='BlueBtn' onClick={handleShow}>Swap From WAXP to DIME</a>
  
        <Modal className='swapModal' show={show} onHide={handleClose} centered>
            <span className="modalTitleArt"></span>
          <Modal.Body className='swapFormModal' >
            <div className="modalTItle">Swap From WAXP to DIME</div>
            <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
            <div className="swapformInner">
                <form action="#">
                    <div className="inputCol">
                        <input type="text" placeholder='Enter WAXP Token here' name='WAXPToken' id='WAXPToken' />
                    </div>
                    <div className="checkConfirm">
                        <input type="checkbox" />
                        <p>Please confirm</p>
                        <a href="#">Terms of service </a>
                    </div>
                    <div className="formBtn">
                        <button className='BlueBtn'>Swap</button>
                    </div>
                    <div className="swap_amount">
                        <h2>566.266</h2>
                        <span className='color-orange'>DIME Token</span>
                    </div>
                </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
     );
}

export default SwapForm;