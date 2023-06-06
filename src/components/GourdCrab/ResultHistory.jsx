import React from 'react';
import { useState, useEffect } from 'react';

import {socket} from '../../services/baucua';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Close from '../../assets/img/icons/close.svg';
//import Result1 from '../../assets/img/baucua/result-1.png';
//import Result2 from '../../assets/img/baucua/result-2.png';
//import Result3 from '../../assets/img/baucua/result-3.png';

import Result1 from '../../assets/img/baucua/ca.png';
import Result2 from '../../assets/img/baucua/tom.svg';
import Result3 from '../../assets/img/baucua/cua.svg';


function GameCardHistory() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [history, setHistory] = useState([]);

    useEffect(() => {
        socket.on('RESULT', (...args) => {
            console.log("RESULT: ", args[0]); // {game_id: '13092', result1: 4, result2: 2, result3: 6}
            //setResult(args[0]);
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
                    <div className="gameCardHis historyTable">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Game ID</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td># 23265323</td>
                                    <td>
                                        <div className="resultBOx">
                                            <div className="resultGame">
                                                <img src={Result1} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result2} alt="Result" />
                                            </div>
                                            <div className="resultGame">
                                                <img src={Result3} alt="Result" />
                                            </div>
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

export default GameCardHistory;