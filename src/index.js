import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import loginReducer from "./reducers/loginReducer"
import './index.css';
import 'typeface-roboto';


import Main from "./components/base/Main"

import * as serviceWorker from './serviceWorker';

var destination = document.getElementById('root');

var store = createStore(loginReducer);

ReactDOM.render(<Provider store={store}>
					<Main />
				</Provider>,
				destination);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
