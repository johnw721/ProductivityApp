import InitialState from './InitialState';
import * as actions from '../actions/actionsType'
import {produce} from 'immer';

function stageProps (state=InitialState,action){
    switch (action.type) {
        case actions.ADDED_TIME:
            var addTime=produce(state,draft=>{
                draft[action.payload.id].stages[action.payload.stageId].timeAdded = action.payload.timeAdded
            })
            /*find the id of the habit 
            then find the id of the stage
            use the timeAdded property of the stage
             to add to the totalTime property
             of the habit object */

             return addTime;
    
        case actions.STAGES_ADDED:
            /*find the id of the habit then
            concat to the array of Stages with a 
            name and a number for the time limit 
            that stage has. That same number will be 
            applied to the ADDED_TIME */
            var stageAdd = produce(state,draft=>{
                draft[action.payload.id].stages.push({
                    id: draft[action.payload.id].stages.length,
                    title:action.payload.title,
                    timeAdded:action.payload.timeAdded
                })
            })
           return stageAdd;
        case actions.STAGE_TITLE:
            var stageTitle=produce(state,draft=>{
                draft[action.payload.id].stages[action.payload.stageId].title=action.payload.title
            })
            return stageTitle;
        case actions.STAGES_DELETED:
            /*find the id of the habit then
            find the id of the stage and delete it 
             */
            var stageDelete=produce(state,draft=>{
                draft[action.payload.id].stages.splice(action.payload.stageId,1)
            })
            return stageDelete;
        default:
            return state;
    }
}

export default stageProps;