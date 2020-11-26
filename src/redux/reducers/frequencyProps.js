import InitialState from './InitialState';
import * as actions from '../actions/actionsType';
import {produce} from  'immer';

function frequencyProps(state=InitialState,action){
    
    switch(action.type){
        case actions.MONDAY:
            var Monday = produce(state,draft=>{
                draft[action.payload.id].frequency.Monday = !draft[action.payload.id].frequency.Monday
            });
            return Monday
        case actions.TUESDAY:
            var Tuesday = produce(state,draft=>{
                draft[action.payload.id].frequency.Tuesday=!draft[action.payload.id].frequency.Tuesday
            });
            return Tuesday
        case actions.WEDNESDAY:
            var Wednesday = produce(state,draft=>{
                draft[action.payload.id].frequency.Wednesday= !draft[action.payload.id].frequency.Wednesday
            });
            return Wednesday
        case actions.THURSDAY:
            var Thursday = produce(state,draft=>{
                draft[action.payload.id].frequency.Thursday=!draft[action.payload.id].frequency.Thursday
            });
            return Thursday
        case actions.FRIDAY:
            var Friday = produce(state,draft=>{
                draft[action.payload.id].frequency.Friday=!draft[action.payload.id].frequency.Friday
            });
            return Friday
        case actions.SATURDAY:
            var Saturday = produce(state,draft=>{
                draft[action.payload.id].frequency.Saturday=!draft[action.payload.id].frequency.Saturday
            });
            return Saturday
        case actions.SUNDAY:
            var Sunday = produce(state,draft=>{
                draft[action.payload.id].frequency.Sunday=!draft[action.payload.id].frequency.Sunday
            });
            return Sunday
        default:
            return state;
    }
}

export default frequencyProps;