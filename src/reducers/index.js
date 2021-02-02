import { ADD_BOOKS } from "../actions/index";

const initialState = {
    books: []
  };
  
  function rootReducer(state = initialState, action) {
     switch(action.type){
       case ADD_BOOKS:
        
        return {
          ...state,
          ...action.books
        }
        default:
          return state;

      }
  };
  
  export default rootReducer;