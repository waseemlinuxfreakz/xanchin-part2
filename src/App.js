import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import './App.css';
import './App2.css';
import './responsive.css';
import './responsive2.css';

import {storeAppDispatch} from './GlobalState/Store';
import { setToken } from './GlobalState/UserReducer';
import {socket} from './services/balance';
import {userAccount, login, updateWallet} from './web3/testnet';

import LoginPage from './pages/login';
import HomePage from './pages/Home';
import MyWallet from "./pages/MyWallet";
import RestrictedArea from "./pages/static/RestrictedArea";
import HowToPlay from "./pages/static/HowtoPlay";
import Affilate from "./pages/Affilate";
import ContactUs from "./pages/static/ContactUs";
import FAQ from "./pages/static/FAQ";
import BigSmall from "./pages/BigSmall";
import GourdCrab from "./pages/GourdCrab";
import Bankroll from "./pages/Bankroll";
import HiLo from "./pages/HiLo";
import CoinFlip from "./pages/CoinFlip";
import PlayCard2 from "./pages/PlayCard2";
import ClassicDice from "./pages/ClassicDice";
import MiniPoker from "./pages/MiniPoker";
//import DailySpin from "./pages/DailySpin";
import ShakeDish from "./pages/ShakeDish";
import Crash from "./pages/Crash";
import BaccaratMulti from "./pages/BaccaratMulti";
import Baccarat from "./pages/Baccarat";
import Homepage from "./components/Homepage/Homepage";
import Lotterypage from "./components/Lotterypage/Lotterypage";
import Lotterypage2 from "./components/Lotterypage/Lotterypage2";
import Lotterypage3 from "./components/Lotterypage/Lotterypage3";
import Resultpage from "./components/Resultpage/Resultpage";
import Resultpage2 from "./components/Resultpage/Resultpage2";
import Resultpage3 from "./components/Resultpage/Resultpage3";
import Myticket from "./components/Myticket/Myticket";
import Myticket2 from "./components/Myticket/Myticket2";
import Myticket3 from "./components/Myticket/Myticket3";




function App() {

  // REACT_APP_CONSOLE

  if (process.env.REACT_APP_CONSOLE === "on") console.log("RUNNING ON BETA/TESTNET. CHANGE TO OFF AT PRODUCTION");

  if (!userAccount) { 
    const storage = JSON.parse(localStorage.getItem('xanhchin.io'));
    if (process.env.REACT_APP_CONSOLE === "on") console.log("storage in App: ", storage);
    if (storage) {
      login(storage.userAccount, storage.key);
    }
  }
  const UserState = useSelector((store) => store.user);

  useEffect(() => {

    socket.emit("join", {"player": userAccount});

    // Update user's wallet 
    if (!UserState.token) updateWallet();

    if (process.env.REACT_APP_CONSOLE === "on") console.log("Listening to balance in App");
    socket.on('WALLET_BALANCE', (...args) => {
        storeAppDispatch(setToken(args[0].balance));
        if (process.env.REACT_APP_CONSOLE === "on") console.log("updating balance in App");
    });

    return () => {
      socket.off('WALLET_BALANCE');
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-wallet" element={<MyWallet />} />
            <Route path="/restricted-area" element={<RestrictedArea />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/affilate" element={<Affilate />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/tai-xiu" element={<BigSmall />} />

            <Route path="/bau-cua" element={<GourdCrab />} />
            <Route path="/xoc-dia" element={<ShakeDish />} />
            <Route path="/crash" element={<Crash />} />
            
            <Route path="/baccarat" element={<Baccarat />} />
            <Route path="/baccarat-multiplayer" element={<BaccaratMulti />} />
            
            {/*<Route path="/bankroll" element={<Bankroll />} />*/}
            <Route path="bankroll">
              <Route path=":game" element={<Bankroll />} />
            </Route>
            <Route path="/hilo" element={<HiLo />} />
            <Route path="/play-card-2" element={<PlayCard2 />} />
            <Route path="/tung-xu" element={<CoinFlip />} />
            <Route path="/xuc-xac" element={<ClassicDice />} />
            <Route path="/mini-poker" element={<MiniPoker />} />
            {/*<Route path="/daily-spin" element={<DailySpin />} />*/}


            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Lotterypage" element={<Lotterypage />} />
            <Route path="/Lotterypage2" element={<Lotterypage2 />} />
            <Route path="/Lotterypage3" element={<Lotterypage3 />} />
            <Route path="/Resultpage" element={<Resultpage />} />
            <Route path="/Resultpage2" element={<Resultpage2 />} />
            <Route path="/Resultpage3" element={<Resultpage3 />} />
            <Route path="/Myticket" element={<Myticket />} />
            <Route path="/Myticket2" element={<Myticket2 />} />
            <Route path="/Myticket3" element={<Myticket3 />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
