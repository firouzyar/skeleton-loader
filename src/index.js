import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import createStore from './Store/Store';
import "./index.css"

const store = createStore();

const jsx =
    (<Provider store={store}>
        <App/>
    </Provider>)



ReactDOM.render(jsx, document.getElementById('root'));