import * as actions from './actionsType'

export default function reducer (state=[],action){
    switch (action.type) {
        case actions.ADDED_TIME:
            return state.filter(id=>id);
    
        default:
            return state;
    }
}