import InitialState from './InitialState';
import * as actions from '../actions/actionsType'
import{produce} from 'immer';

function settingsType(state=InitialState,action){
switch(action.type){
    case actions.SET_TYPE:
        var setType=produce(state,draft=>{
            draft[action.payload.id].Settings=action.payload.type
        })
// Access the Settings and change the value with the spread operator
         return setType
    default:
        return state;
}
}

export default settingsType;