import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GameOVer from '../assets/img/game-over.svg';


function GameOver() {

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
                    <img src={GameOVer} alt="GameOVer" className="gameOver" />
                    <h2>opps!</h2>
                    <p>You loss this game</p>
                    <Button className='BlueBtn' onClick={handleClose}>
                        Next Game
                    </Button>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default GameOver;