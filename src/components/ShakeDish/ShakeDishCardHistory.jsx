import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {socket} from '../../services/xocdia';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';


function ShakeDishCardHistory(props) {
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
    // console.log(history);

    function openBowl (value) {
        if (value === 1) return <div className="dottedItem blackDotted"><span></span></div>
        else if (value === 2) return <div className="dottedItem"><span></span></div>
        else return <></>
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return ( 
        <>
            <span onClick={handleShow} className="history_tab borderBtn">Result History</span>

            <Modal className='historyModal' show={show} onHide={handleClose}>
                <div className='modal_header'>
                    <h2 className='modal_title'>Result History</h2>
                    <img src={Close} alt="Close" onClick={handleClose} className="closeModal" />
                </div>
                <Modal.Body>
                    <div className="ShakeDishHistory gameCardHis historyTable">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Game ID</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {history.map( game => {
                                return <tr key={v4()}>
                                    <td>{game.game_id}</td>
                                    <td>
                                        <div className="dottedList">
                                            {openBowl(game.result1)}
                                            {openBowl(game.result2)}
                                            {openBowl(game.result3)}
                                            {openBowl(game.result4)}
                                        </div>
                                    </td>
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

export default ShakeDishCardHistory;