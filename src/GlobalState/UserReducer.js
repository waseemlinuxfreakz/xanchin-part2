import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userAccount: undefined,         // user wallet address
    key:        undefined,                 // user private key (Only user in BETA for testing. real application user WAX Cloud Wallet)
    waxp:       0,                  // WAXP balance in user wallet. NOT USED MUCH this value
    token:      0,                  // Token balance in user wallet
    taixiu:     0,
    baucua:     0,
    xocdia:     0,
    rocket:     0,
    baccarat:   0
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData:      (state, action) => (action.payload),
        setLogout:    (state, action) => initialState,
        setKey:       (state, action) => ({...state, key: action.payload}),
        setWaxp:      (state, action) => ({...state, waxp: action.payload}),
        setToken:     (state, action) => ({...state, token: action.payload}),
        setTaixiu:    (state, action) => ({...state, taixiu: action.payload}),
        setBaucua:    (state, action) => ({...state, baucua: action.payload}),
        setXocdia:    (state, action) => ({...state, xocdia: action.payload}),
        setRocket:    (state, action) => ({...state, rocket: action.payload}),
        setBaccarat:  (state, action) => ({...state, baccarat: action.payload})
    }
});

export const { 
    setData, 
    setLogout, 
    setKey, 
    setWaxp, 
    setToken,
    setTaixiu,
    setBaucua,
    setXocdia,
    setRocket,
    setBaccarat
} = user.actions;

export default user.reducer;