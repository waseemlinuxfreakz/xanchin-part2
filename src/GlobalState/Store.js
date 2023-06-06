import { configureStore } from '@reduxjs/toolkit';
import { rootReducer as reducer } from './reducers';

const Store = configureStore({
    reducer
});

export const storeAppDispatch = Store.dispatch;
export default Store;