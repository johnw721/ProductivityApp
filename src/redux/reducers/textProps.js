import InitialState from './InitialState';
import * as actions from '../actions/actionsType'
import{produce} from 'immer';

function textProps (state=InitialState,action){
    switch(action.type){
        case actions.ADD_ENTRY:
            var addEntry=produce(state,draft=>{
                draft[action.payload.id].text.push({
                    date:action.payload.date,
                    content:action.payload.content,
                    reflection:''
                })
            })
            /*find id of the habit then
            access property of Text and
            add on to content property */
            return addEntry;
        case actions.ADD_REFLECTION:
            var addReflect=produce(state,draft=>{
                draft[action.payload.id].text[action.payload.date].reflection= action.payload.content;
            })
            /*find id of the habit then 
            access property of Text and
            write if statement.
            If the id(the date of the original post)
            doesn't equal today's date add text to Reflection */
            return addReflect;
        default:
            return state;
    }
}

export default textProps;