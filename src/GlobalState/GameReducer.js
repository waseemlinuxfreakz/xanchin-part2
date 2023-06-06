import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    game_id:    0,
    timeLeft:   0,
    side:       0,
    bankroll:   0,
    status: "WAITING" // COUNTDOWN, WAITING, RESULT
};

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setId:          (state, action) => ({...state, game_id: action.payload}),
        setTime:        (state, action) => ({...state, timeLeft: action.payload}),
        setSide:        (state, action) => ({...state, side: action.payload}),
        setBankroll:    (state, action) => ({...state, bankroll: action.payload}),
        setStatus:      (state, action) => ({...state, status: action.payload})
    }
});

export const { setId, setTime, setSide, setBankroll, setStatus } = game.actions;

export default game.reducer;