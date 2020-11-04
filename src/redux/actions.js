
import * as actions from './actionsType'

/* Change timer *

/* Move initial time up as in put more time*/
const moreTime =(timeAdded)=>(
    {
        type:actions.ADDED_TIME,
        payload:{
            id,
            timeAdded
        }
    }
)
/* Move initial time down as in give less time  */
const lessTime =(id,lessTime)=>(
    {
        type:actions.LESS_TIME,
        payload:{
            id,
            lessTime
        }
    }
)
/*Change reflection date to see previous entries on habit */
const dateOfJournal =(dateId)=> (
    {
        type:actions.DATE,
        payload:{
            id,
            dateId,
            text
        }
    }
)
/*Add stages to habits  */
const stagesAdded = (id,stageId,title,timeAdded)=>(
    {
        type:actions.STAGES_ADDED,
        payload:{
            id,
            stageId,
            title,
            timeAdded
        }
    }
)

const stagesDeleted = (id,stageId)=>(
    {
        type:actions.STAGES_DELETED,
        payload:{
            id,
            stageId
        }
    }
)
/*Frequency will work close with timer.js to provide notifications */