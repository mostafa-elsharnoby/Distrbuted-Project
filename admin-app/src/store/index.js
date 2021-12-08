import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';
//import { thunk } from 'redux-thunk';
/* Create store take to arguments first one is callback fn and second one is middlware*/

const initialState = {};
const store = createStore(rootReducer, initialState /*, applyMiddleware([thunk])*/ );

export default store;