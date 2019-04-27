import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Posts from "../Reducer/index";
const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(combineReducers({
            Posts:Posts ,
        }
        ),
        composeenhance(applyMiddleware(ReduxThunk))
    );
    return store;
}
