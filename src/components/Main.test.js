import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import reducer from '../reducers/reducer';
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

it('renders without crashing', () => {

	var store = createStore(
		reducer,
		composeWithDevTools(applyMiddleware(thunk))
	);


  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}> 
  						<Main  />
  					</Provider>	, div);
  ReactDOM.unmountComponentAtNode(div);
});