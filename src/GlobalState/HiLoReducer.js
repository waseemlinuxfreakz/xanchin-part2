import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    player: undefined,
    bet_amount:     0,
    rake:       0,
    bet_side:       0,
    win_multiplier: 0,
    results:    [],
    text_results: [],
    finished:   1
};

const hilo = createSlice({
    name: 'hilo',
    initialState,
    reducers: {
        setGame:    (state, action) => (action.payload)
    }
});

export const { setGame } = hilo.actions;

export default hilo.reducer;