import {InitialState} from './InitialState'
import {produce} from 'immer';

const listReducer = produce((draft=[],action)=>{
    switch (action.type) {
        case 'ADD_HABIT':
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
            break;
        case 'DELETE_HABIT':
            draft[action.payload.id].splice()
        default:
            return draft;    }
})

export default listReducer;