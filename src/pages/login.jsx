import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {storeAppDispatch} from '../GlobalState/Store';
import { setData } from '../GlobalState/UserReducer';
import { login } from '../web3/testnet';


function LoginPage() {

    const navigate = useNavigate();

    const [inputUser, setUser] = useState("");
    const [inputKey, setKey] = useState("");

    function handleUser(e) {
        setUser(e.target.value ? e.target.value : "");
        //console.log(inputUser);
    }
    function handleKey(e) {
        setKey(e.target.value ? e.target.value : "");
        //console.log(inputUser);
    }
    function handleLogin(e) {
        e.preventDefault();
        const data = {
            userAccount: inputUser,
            key: inputKey
        };
        localStorage.setItem('xanhchin.io', JSON.stringify(data));
        login(inputUser, inputKey);
        navigate("/my-wallet");
    }

    return ( 
        <div className="login_container">
            <div className="container">
                <a href="#" className='LoginLogo'>
                    <img src="/static/media/logo.svg" alt="Logo" />
                </a>
                <div className="loginFormContainer">
                    <form action="/homepage">
                        <div className="inputCol">
                            <input onChange={handleUser} value={inputUser} type="text" placeholder='Enter Wallet Address' name='LoginUser' />
                        </div>
                        <div className="inputCol">
                            <input onChange={handleKey} type="password" placeholder='Enter Private Key' name='LoginKey' />
                        </div>
                        <div className="formBtn">
                            <button onClick={handleLogin} type='submit' className='blue_Btn'>Login</button>
                        </div>
                    </form>
                    <div className="alert_box red_box">
                        This page only used for testnet.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;