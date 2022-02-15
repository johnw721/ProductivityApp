import {combineReducers} from 'redux';
import listReducer from './renderList';

const Reducer = combineReducers({
    listReducer:listReducer
})

export default Reducer;