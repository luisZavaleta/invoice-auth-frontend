import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import './index.css';
import 'typeface-roboto';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';


import Main from "./components/Main"

import * as serviceWorker from './serviceWorker';

var destination = document.getElementById('root');

var store = createStore(
		reducer,
		composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store}>
					<Main />
				</Provider>,
				destination);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
