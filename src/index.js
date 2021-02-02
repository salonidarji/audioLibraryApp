import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import store from "./store/index";
import { Provider } from "react-redux";
import { addBooks } from "./actions/index";

ReactDOM.render(
  <p>Loading...</p>
 ,  document.getElementById('root')
 );

 store.dispatch(addBooks()).then(()=>{
  ReactDOM.render(
    <Provider store={store}>
     <Routes/>
     </Provider>
   ,  document.getElementById('root')
   );
 })
 


