import { createStore , applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import authReducer from "../reducers/authReducer";

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        books:rootReducer,
        auth:authReducer
    }),composeEnhancers(applyMiddleware(thunk)));
 
export default store;