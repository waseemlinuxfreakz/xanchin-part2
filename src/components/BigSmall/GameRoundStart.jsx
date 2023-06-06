import React from 'react';

function GameRoundStart(props) {
    return ( 
        <div className="gameRound">
            <div className="gameRoundTop">
                <span className="game_Round">2</span>
                <p>Game round will be start soon </p>
            </div>
            <div className="gameroundResult">
                <img src={"/static/media/dices/" + props.result.result1 + ".png"} alt="Tai Xiu Xanh Chin, xanhchin.io" />
                <img src={"/static/media/dices/" + props.result.result2 + ".png"} alt="Tai Xiu Xanh Chin, xanhchin.io" />
                <img src={"/static/media/dices/" + props.result.result3 + ".png"} alt="Tai Xiu Xanh Chin, xanhchin.io" />
            </div>
        </div>
     );
}

export default GameRoundStart;