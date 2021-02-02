import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
 <Provider store={store}>
  <Routes/>
  </Provider>
,  document.getElementById('root')
);


