import React from 'react';

import BeatRank from '../BeatRank';
//import GameCounterCircle from './GameCounterCircle';
import BaccaratPlayerBanker from './BaccaratPlayerBanker';

function BaccaratGame() {
    return ( 
        <div className="BaccaratGame_box">
            <BeatRank/>
            <div className="BaccaratGameTop row">
                <div className="col-3">
                    <div className="playerCardBox">
                        <p>Player</p>
                        <div className="playerCardBoxInner">
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="GameCounterCircleCol">
                        {/*<GameCounterCircle/> */}
                    </div>
                </div>
                <div className="col-3">
                    <div className="playerCardBox">
                        <p>Banker</p>
                        <div className="playerCardBoxInner">
                        </div>
                    </div>
                </div>
            </div>
            <BaccaratPlayerBanker/>
        </div>
     );
}

export default BaccaratGame;