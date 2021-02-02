
export const ADD_BOOKS = "ADD_BOOKS";
export const addBooks=(books)=> {
    return (dispatch,getState)=>{
      //make async call
      dispatch({type:ADD_BOOKS,books});
    };
  }