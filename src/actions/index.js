import { getBooks } from "../services/api";
export const ADD_BOOKS = "ADD_BOOKS";
export const addBooks=()=> {
    return (dispatch)=>{
      //make async call
      return getBooks().then((data)=>{
        const books=[];
        data.items.forEach(element => {
          books.push({
            id: element.id,
            ...element['volumeInfo']
          })
          
        });
        console.log("Action book: ", books);
        dispatch({type:ADD_BOOKS,books});
      }).catch((e)=>{
        console.log("e:",e);
      });
      
    };
  }