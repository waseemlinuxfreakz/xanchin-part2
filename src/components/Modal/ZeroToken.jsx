import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ZeroToken() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                with o token.
            </Button>

            <Modal className='zeroTokkenModal' show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <p>You can’t bet with 0 token.</p>
                    <Button className='BlueBtn' onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ZeroToken;