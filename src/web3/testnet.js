import { Api, JsonRpc } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';           // development only
import { Buffer } from 'buffer';

import { storeAppDispatch } from '../GlobalState/Store';
import { setData, setLogout, setKey, setWaxp, setToken, setTaixiu, setBaucua, setXocdia, setRocket, setBaccarat } from '../GlobalState/UserReducer';
import { setBankroll } from '../GlobalState/GameReducer';
import { setGame } from '../GlobalState/HiLoReducer';

// @ts-ignore
// IMPORTANT: set Buffer for library eosjs: Uncaught (in promise) ReferenceError: Buffer is not defined
window.Buffer = Buffer;


 const rpcEndpoint = 'https://testnet.waxsweden.org';
//const rpcEndpoint = '135.181.206.121:8888';
const rpc = new JsonRpc(rpcEndpoint, { fetch });



export let userAccount = undefined;
let privateKey = undefined;
//export let userAccount = "banking11wam";
//export let userAccount = "arvernorix12";
// let privateKey = "5HwMkJhJJqThG4uGbM8mbaVbAgk9CfbMhwBsKeVcdyKHmPKJkDH";

export function login( walletAddress, key) {
  userAccount = walletAddress;
  privateKey = key;
  storeAppDispatch(setData({
    userAccount: walletAddress,
    key: key
  }));
}

export function logout() {
  userAccount = undefined;
  privateKey = undefined;
  storeAppDispatch(setLogout());
  console.log("LOGOUT", userAccount, privateKey);
}

// SEND TRANSACTION: DONE.
export async function sendTransaction ( transact ) {
  const signatureProvider = new JsSignatureProvider([privateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

  try {
    await api.transact(transact, {blocksBehind: 3,expireSeconds: 30,}) .then((result) => {
      // Transaction success
    });
  } catch (error) {
    console.log('\nCaught exception: ' + error);
  }
}

export async function updateWallet () {
  // console.log("Updating balance for ", userAccount);
  const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
  const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  if (userAccount) {
    // if Logged in: update Wallet information in here.
    Promise.all([
      await api.rpc.get_currency_balance(process.env.REACT_APP_TOKENCONTRACT, userAccount, process.env.REACT_APP_TOKENSYMBOL),
      await api.rpc.get_currency_balance('eosio.token', userAccount, 'WAX'),  
    ]).then(result => {
      storeAppDispatch(setToken(result[0][0]));
      storeAppDispatch(setWaxp(result[1][0]));
    });
  }
}

export async function updateBalance (smartContract) {
  const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
  const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  if (userAccount && smartContract) {
    // if Logged in: update Wallet information in here.
    try {
      await rpc.get_table_rows( {
        json: true, 
        code: smartContract, 
        scope: smartContract, 
        table: 'balances', 
        lower_bound: userAccount, 
        limit: 1, 
        reverse: false, 
        show_payer: false }) 
      .then((result) => {
        // Transaction success
        if (result.rows[0]) { // User have balance in Smartcontract.
          if (result.rows[0].wallet === userAccount) {
            const balance = result.rows[0].balance;
            if (smartContract === process.env.REACT_APP_SCTAIXIU) storeAppDispatch(setTaixiu(balance));
            if (smartContract === process.env.REACT_APP_SCBAUCUA) storeAppDispatch(setBaucua(balance));
            if (smartContract === process.env.REACT_APP_SCXOCDIA) storeAppDispatch(setXocdia(balance));
            if (smartContract === process.env.REACT_APP_SCROCKET) storeAppDispatch(setRocket(balance));
            if (smartContract === process.env.REACT_APP_SCBACCARAT) storeAppDispatch(setBaccarat(balance));
          }
        } else {
          if (smartContract === process.env.REACT_APP_SCTAIXIU) storeAppDispatch(setTaixiu("0 DIME"));
          if (smartContract === process.env.REACT_APP_SCBAUCUA) storeAppDispatch(setBaucua("0 DIME"));
          if (smartContract === process.env.REACT_APP_SCXOCDIA) storeAppDispatch(setXocdia("0 DIME"));
          if (smartContract === process.env.REACT_APP_SCROCKET) storeAppDispatch(setRocket("0 DIME"));
          if (smartContract === process.env.REACT_APP_SCBACCARAT) storeAppDispatch(setBaccarat("0 DIME"));
        }
      });
    } catch (error) {
      console.log('\nCaught exception: ' + error);
    }
  }
}

export async function updateBankroll (smartContract) {
  const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
  const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  if (smartContract) {
    await rpc.get_table_rows({json: true, code: smartContract, scope: smartContract, table: "sysbalance", limit: 1, reverse: false, show_payer: false})
    .then(result => {
      storeAppDispatch(setBankroll(result.rows[0].total_bankrolls));
    })
  } else {
    return 0;
  }
}


// Function for Game: HiLo, CoinFlip
export async function initialGame (smartContract) {
  const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
  const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  
  if (smartContract && userAccount) {
    try {
      await rpc.get_table_rows({
        json: true,               // Get the response as json
        code: smartContract,      // Contract that we target
        scope: smartContract,     // Account that owns the data
        table: 'games',           // Table name
        lower_bound: userAccount,
        limit: 1,                 // Maximum number of rows that we want to get
        reverse: false,           // Optional: Get reversed data
        show_payer: false         // Optional: Show ram payer
      }).then(result => {
        // console.log(result);
        if ( result.rows[0] ) { 
          if ( result.rows[0].player === userAccount & result.rows[0].finished === 0) {
            storeAppDispatch(setGame(result.rows[0]));
          } else storeAppDispatch(setGame({  // First time play.
            player: userAccount,
            bet_amount:     0,
            rake:       0,
            bet_side:       0,
            win_multiplier: 0,
            results:    [],
            text_results: [],
            finished:   1
          }));
        }
      });
    } catch (error) {
      console.log('\nCaught exception: ' + error);
    }

  } else {
    return 0;
  }
}

// Function is used to get Jackpot for gameslot
export async function updateJackpot (smartContract, callback) {
  console.log("RUNNING UPDATE JACKPOT 2");
  const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
  const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  try {
    await rpc.get_table_rows({
      json: true,               // Get the response as json
      code: smartContract,      // Contract that we target
      scope: smartContract,     // Account that owns the data
      table: 'gamecfgs',           // Table name
      reverse: false,           // Optional: Get reversed data
      show_payer: false         // Optional: Show ram payer
    }).then(result => {
      callback(result);
    });
  } catch (error) {
    console.log('\nCaught exception: ' + error);
  }
}