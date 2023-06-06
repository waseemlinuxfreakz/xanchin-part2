import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {socket} from '../services/hilo';
import {userAccount} from '../web3/testnet'
import { initialGame } from '../web3/testnet';

import { storeAppDispatch } from '../GlobalState/Store';
import { setGame } from '../GlobalState/HiLoReducer';

import StartCard from '../components/HiLo/StartCard';
import StartCardBalance from '../components/HiLo/StartCardBalance';
import CardSelectBox from '../components/HiLo/CardSelectBox';
import Header from '../components/HiLo/Header';
import GameOver from '../components/GameOver';



function Hilo() {

    const HiLoState = useSelector((store) => store.hilo);

    useEffect(() => {
        if ( !HiLoState.player ) initialGame(process.env.REACT_APP_SCHI);

        if (process.env.REACT_APP_CONSOLE === "on") console.log("Listening to result in HiLo.jsx");

        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            storeAppDispatch(setGame(args[0]));
            if (process.env.REACT_APP_CONSOLE === "on") console.log("Updating result in HiLo.jsx");
        });
  
        return () => {
          socket.off('RESULT');
        };

    }, []);

    // used for check status game: if true => game over or user start the game first time.
    if (HiLoState.finished) {
        // User start the game first time or user Cash out
        if (HiLoState.bet_amount === 0 || HiLoState.win_multiplier > 0) {
            return ( 
                <div className='PageWraper bigSmallWrap PlayCardWraper'>
                    <Header/>
                    <section className="PlayCard_area bigSmallGame_area affilate_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7">
                                    <CardSelectBox/>
                                </div>
                                <div className="col-xl-5">
                                    <StartCard/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
             );
        }   else // Game Over.<GameOver/>
            return ( 
                <div className='PageWraper bigSmallWrap PlayCardWraper'>
                    <Header/>
                    <section className="PlayCard_area bigSmallGame_area affilate_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7">
                                    <CardSelectBox/>
                                    <GameOver />
                                </div>
                                <div className="col-xl-5">
                                    <StartCard/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
             );
    }   else // User Playing game.
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <Header/>
            <section className="PlayCard_area bigSmallGame_area affilate_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <CardSelectBox/>
                        </div>
                        <div className="col-xl-5">
                            <StartCardBalance/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Hilo;

/*

    const [status, setStatus] = useState("start");
    const [cards, setCards] = useState([]);
    useEffect(() => {
        socket.emit("join", {"player": userAccount});

        socket.on('RESULT', (...args) => {
            console.log("RESULT MAIN COMPONENT HILO");
            console.log(args[0]);
            setCards(args[0].text_results);
            if (args[0].finished === true) setStatus("finish");
            else setStatus("betting");
        });
  
        return () => {
          socket.off('RESULT');
        };
    }, []);
    // console.log("cards: ", cards);


results
: 
Array(6)
0
: 
{key: '12', type: '2', random_value: '4E4BD297D1E59770B687BF0C726FCBD97FD1CF500E4855FB927EF68ACE6CA214'}
1
: 
{key: '4', type: '2', random_value: '6814AF07D4FD6FCFE22CAD4F633C925924546573831057B3018C0A36A69FD9E0'}
2
: 
{key: '11', type: '4', random_value: '9330D80209ED102FBCD8EE71E957D80F41FDAF58245D8B3B0B272CC41F8DE5CE'}
3
: 
{key: '7', type: '2', random_value: '53FA91F1867A3CE3F8DB39A28E9573AD202E573E802F64621A519D820F7F3989'}
4
: 
{key: '7', type: '1', random_value: 'A6BA814F463276502B45C90A2926B278B85831A3D95B193D2436CD9904B5F666'}
5
: 
{key: '2', type: '3', random_value: 'D75634C3C1ADD970BA8409A5D998D25A189A3759A35F8F5D5E2BA499DD361856'}
length
: 
6
[[Prototype]]
: 
Array(0)
text_results
: 
Array(6)
0
: 
{key: 'Q', type: 'Diamond', random_value: '4E4BD297D1E59770B687BF0C726FCBD97FD1CF500E4855FB927EF68ACE6CA214'}
1
: 
{key: '4', type: 'Diamond', random_value: '6814AF07D4FD6FCFE22CAD4F633C925924546573831057B3018C0A36A69FD9E0'}
2
: 
{key: 'J', type: 'Spade', random_value: '9330D80209ED102FBCD8EE71E957D80F41FDAF58245D8B3B0B272CC41F8DE5CE'}
3
: 
{key: '7', type: 'Diamond', random_value: '53FA91F1867A3CE3F8DB39A28E9573AD202E573E802F64621A519D820F7F3989'}
4
: 
{key: '7', type: 'Heart', random_value: 'A6BA814F463276502B45C90A2926B278B85831A3D95B193D2436CD9904B5F666'}
5
: 
{key: '2', type: 'Club', random_value: 'D75634C3C1ADD970BA8409A5D998D25A189A3759A35F8F5D5E2BA499DD361856'}
length
: 
6

{player: 'arvernorix12', bet_amount: '2.0000 DIME', bet_side: '', results: Array(1), text_results: Array(1), …}
bet_amount
: 
"2.0000 DIME"
bet_side
: 
""
finished
: 
true
player
: 
"arvernorix12"
results
: 
Array(1)
0
: 
{key: '2', type: '1', random_value: 'D554A66C1F87343BDC5E9E60828BE664B893C27F818A6A39D1FD46D2CA5C0A6A'}
length
: 
1
[[Prototype]]
: 
Array(0)
text_results
: 
Array(1)
0
: 
{key: '2', type: 'Heart', random_value: 'D554A66C1F87343BDC5E9E60828BE664B893C27F818A6A39D1FD46D2CA5C0A6A'}
length
: 
1
[[Prototype]]
: 
Array(0)
[[Prototype]]
: 
Object
*/