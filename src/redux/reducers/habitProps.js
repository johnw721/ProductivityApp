import InitialState from './InitialState';
import * as actions from '../actions/actionsType'
import {produce} from 'immer'

function habitProps(state=InitialState,action){
    switch(action.type){
        case actions.ADD_HABIT:
            var addHabit = produce(state,draft=>{
            draft.push({
                id: draft.length,
                title: action.payload.title,
                totalTime:action.payload.totalTime,
                Settings:'',
                stages:[
                    {
                        id:Number,
                        timeAdded:Number,
                        title:String
                    }
                ],
                frequency:{
                    Monday: false,
                    Tuesday: false,
                    Wednesday: false,
                    Thursday: false,
                    Friday: false,
                    Saturday: false,
                    Sunday: false
                },
                support:{
                YouTube: false,
                Camera: false,
                Spotify: false
                },
                text:[{
                /*date](//date) of entry serves as Id*/
                date:Number,
                /* written on the day of */
                content:String,
                /* things written after the initial date */
                reflection:String
                }]
            })
            })
            return addHabit

        case actions.DELETE_HABIT:
            var deleteHabit= produce(state,draft=>{
                draft.splice(action.payload.id,1);
            })
            return deleteHabit;

        case actions.CHANGE_TITLE:
            var changeTitle=produce(state,draft=>{
                draft[action.payload.id].title=action.payload.title
            })
            return changeTitle;
        case actions.CHANGE_TOTALTIME:
            var changeTime = produce(state,draft=>{
                draft[action.payload.id].totalTime = action.payload.totalTime
            })
            return changeTime;
        default:
            return state;
    }
}

export default habitProps;