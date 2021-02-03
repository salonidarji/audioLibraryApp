import React from "react";
import * as Mui from '@material-ui/core';

import BaseComponent from "./BaseComponent";
import {CardComponent} from "./CardComponent";
import {connect} from 'react-redux';

import store from "../store/index";

console.log("Initial State: " ,store.getState());



const HomeComponent=(props)=>{

   return (
   <BaseComponent title="Home Page" description="Welcome to Website">
    
    
      {
      props.books.map((book,index)=>{
        return(
          <Mui.Grid item xs={3} key={index}>
        
            <CardComponent book={book} />
          </Mui.Grid>
        )
      })}
    
      
    </BaseComponent>
   )
}

const mapStateToProps=state=>{
  return {
    books:state.books.books
  }
}
export default connect(mapStateToProps)(HomeComponent);