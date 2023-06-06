import { useState, useEffect, useRef } from 'react';
import { v4 } from 'uuid';

import {socket} from '../../services/baccarat';

import BeatRank from '../BeatRank';
import GameCounterCircle from './GameCounterCircle';
import BaccaratPlayerBanker from './BaccaratPlayerBanker';

function BaccaratGame() {

    const [banker, setBanker] = useState([]);
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        socket.on('COUNTDOWN', (...args) => {
            // RESET ALL for new round.
            if ( args[0].timeleft === 30) {
                setBanker([]);
                setPlayer([]);
            }
        });
        
        socket.on('RESULT', (...args) => {
            setBanker(args[0].banker_cards);
            setPlayer(args[0].player_cards);
        });
    
        return () => {
          socket.off('COUNTDOWN');
          socket.off('RESULT');
        };
    }, []);

    function showCard (card) {
        return <img key={v4()} src={"/static/media/poker_cards/" + card.value + "_" + card.suit + ".svg"} alt="Baccarat Xanh Chin, xanhchin.io" />
    }
    return ( 
        <div className="BaccaratGame_box">
            <BeatRank />
            <div className="BaccaratGameTop row">
                <div className="col-3">
                    <div className="playerCardBox">
                        <p>Player</p>
                        <div className="playerCardBoxInner">
                            {player.map(card => showCard(card))}
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="GameCounterCircleCol">
                        <GameCounterCircle/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="playerCardBox">
                        <p>Banker</p>
                        <div className="playerCardBoxInner">
                            {banker.map(card => showCard(card))}
                        </div>
                    </div>
                </div>
            </div>
            <BaccaratPlayerBanker />
        </div>
     );
}

export default BaccaratGame;