import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {socket} from '../../services/taixiu';

import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';

function ResultHistory() {

    function dice (v) {
        return <img src={"/static/media/dices/" + v + ".png"} alt="Tai Xiu Xanh Chin, Xanh Chin, xanhchin.io" />
    }

    function side (value) {
        if (value === "xiu") return <td><span className="color-red">XIU</span></td>
        else return <td><span className="color-green">TAI</span></td>
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        socket.on('RESULT', (...args) => {
            let temp = history;
            temp.unshift(args[0]);
            setHistory(temp);
        });
    
        return () => {
          socket.off('RESULT');
        };
    }, []);

    return ( 
        <>
            <span onClick={handleShow} className="history_tab borderBtn">Result History</span>

            <Modal className='historyModal' show={show} onHide={handleClose}>
                <div className='modal_header'>
                    <h2 className='modal_title'>Result History</h2>
                    <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
                </div>
                <Modal.Body>
                    <div className="historyTable">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Game ID</th>
                                    <th>3 Dices</th>
                                    <th>Winning side</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map( game => {
                                return <tr key={v4()}>
                                    <td># {game.game_id}</td>
                                    
                                    <td>
                                        <div className="threeDices">
                                            <div className="singleDices">
                                                {dice(game.result1)}
                                            </div>
                                            <div className="singleDices">
                                                {dice(game.result2)}
                                            </div>
                                            <div className="singleDices">
                                                {dice(game.result3)}
                                            </div>
                                        </div>
                                    </td>

                                    {side(game.won_side)}

                                </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
     );
}

export default ResultHistory;
