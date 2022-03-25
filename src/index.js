import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore,applyMiddleware} from "redux" 
import { Provider } from 'react-redux';
import reducer from "./reducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { dataApi } from "./actions";

const store=createStore(reducer,applyMiddleware(thunk,logger));

store.dispatch(dataApi());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));
