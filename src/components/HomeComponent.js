import React from "react";
import BaseComponent from "./BaseComponent";
import {CardComponent} from "./CardComponent";
import {connect} from 'react-redux';

import store from "../store/index";

console.log("Initial State: " ,store.getState());



const HomeComponent=(props)=>{

   return (
   <BaseComponent title="Home Page" description="Welcome to Website">
      <h3> List of Books </h3>
      <div className="row">
      {
      props.books.map((book,index)=>{
        return(
          <div key={index} className="col-3 mb-4">
            <CardComponent book={book} />
          </div>
        )
      })}
      </div>
      
    </BaseComponent>
   )
}

const mapStateToProps=state=>{
  return {
    books:state.books
  }
}
export default connect(mapStateToProps)(HomeComponent);