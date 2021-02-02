import React , { useState,useEffect }from "react";
import BaseComponent from "./BaseComponent";
import {CardComponent} from "./CardComponent";
import { getBooks } from '../services/api';
import { addBooks } from '../actions/index';
import {connect} from 'react-redux';

import store from "../store/index";

console.log("Initial State: " ,store.getState());



const HomeComponent=(props)=>{

  
  const [books,setBooks] = useState([]);

  const loadBooks =()=>{
    getBooks().then((data)=>{
      if(data){
        console.log("one book data: ", data.items[0]['volumeInfo']);
        setBooks(data.items);
       
        console.log("books: ",data.items);
        props.addBooks(data.items);
      }
    })
    
    }
useEffect(() => {
  
    loadBooks()
   
 
}, []);

  
   return (
   <BaseComponent title="Home Page" description="Welcome to Website">
      <h3> List of Books </h3>
      <div className="row">
      {books.map((book,index)=>{
        return(
          <div key={index} className="col-3 mb-4">
            <CardComponent book={book['volumeInfo']} />
          </div>
        )
      })}
      </div>
      
    </BaseComponent>
   )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addBooks: (book) => dispatch(addBooks(book))
  }
}
export default connect(null,mapDispatchToProps)(HomeComponent);