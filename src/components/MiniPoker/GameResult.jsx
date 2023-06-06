import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Result from '../../assets/img/Result.svg';


function GameResult(props) {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Button className='BlueBtn gameoveBtn d-none' variant="primary" onClick={handleShow}>
                Game Over
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='gameOverModal'
                centered
            >
                <Modal.Body>
                    <img src={Result} alt="Result" className="gameOver" />
                    <h2>You won this game</h2>
                    <p className='color-orange'>{props.reward}</p>
                    <Button className='BlueBtn' onClick={handleClose}>
                        Next Game
                    </Button>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default GameResult;