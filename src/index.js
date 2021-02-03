import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes , {history} from './Routes';
import store from "./store/index";
import { Provider } from "react-redux";
import { addBooks } from "./actions/index";
import { login,logout } from "./actions/auth";
import {firebase } from "./firebase";

let hasRendered = false;

const renderApp=()=>{
  if(!hasRendered){
    ReactDOM.render(
      <Provider store={store}>
       <Routes/>
       </Provider>
     ,  document.getElementById('root')
     );

     hasRendered=true;
  }
}
ReactDOM.render(
  <p>Loading...</p>
 ,  document.getElementById('root')
 );

 
 
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    
     console.log("auth user:", user);
    console.log("logged in");
    store.dispatch(login(user));
    store.dispatch(addBooks()).then(()=>{
      renderApp();
      if(history.location.pathname === '/'){
        history.push("/home");
      }
     })
     
  }
  else{
    store.dispatch(logout());
    console.log("logged out");
    renderApp();
    history.push('/');
  }
})