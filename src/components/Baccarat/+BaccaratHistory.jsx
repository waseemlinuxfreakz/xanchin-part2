import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';
import Card1 from '../../assets/img/Card-1.png';
import Card2 from '../../assets/img/card-2.png';


function BaccaratMultiHistoryID() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return ( 
        <>
            <span onClick={handleShow} className="history_tab borderBtn BaccaratMultiHistoryID">Result History</span>

            <Modal className='historyModal' show={show} onHide={handleClose}>
                <div className='modal_header'>
                    <h2 className='modal_title'>Result History</h2>
                    <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
                </div>
                <Modal.Body>
                    <div className="BaccaratMultiHistory historyTable">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Game ID</th>
                                    <th>Player</th>
                                    <th>Banker</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#"># 6562326</a>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cardHistorybox">
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                            <img src={Card1} alt="Card" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default BaccaratMultiHistoryID;