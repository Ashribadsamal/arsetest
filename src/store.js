import { createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios'
import { userReducer } from './Reducer/reducer';

const initialState={
  users: [],
  user: null,
}

//action




//Reducer



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(userReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;