import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import {authReducer} from './authReducer';
import {gadgetReducer} from './gadgetReducer';
import { logMiddleWare } from './logMiddleware';
import thunk from 'redux-thunk';

// export const store 
//         = createStore(
//             combineReducers({auth: authReducer, gadgets: gadgetReducer}),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store
        = createStore(
            combineReducers({auth: authReducer, gadgets: gadgetReducer}),
            composeEnhancers( applyMiddleware(logMiddleWare,thunk)));