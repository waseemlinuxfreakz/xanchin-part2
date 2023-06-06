import { combineReducers } from 'redux';

import user from './UserReducer';
import game from './GameReducer';
import hilo from './HiLoReducer';

export const rootReducer = combineReducers({
    user,
    game,
    hilo
});
