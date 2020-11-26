
import * as actions from './actionsType'

/* Change timer */
export const setType=(Event)=>(
    {
        type:actions.SET_TYPE,
        payload:{
            Settings:Event.target.innerText
        }
    }
)/* Move initial time up as in put more time*/
export const moreTime =(timeAdded)=>(
    {
        type:actions.ADDED_TIME,
        payload:{
            timeAdded
        }
    }
)
/* Move initial time down as in give less time  */
export const createStage =(title,timeAdded)=>(
    {
        type:actions.STAGES_ADDED,
        payload:{
            title,
            timeAdded
        }
    }
)
/*Change reflection date to see previous entries on habit */
export const createEntry =(title,entry)=> (
    {
        type:actions.ADD_ENTRY,
        payload:{
            title,
            entry
        }
    }
)
export const createReflect =(id,entry)=> (
    {
        type:actions.ADD_ENTRY,
        payload:{
            id,
            entry
        }
    }
)
export const stagesDeleted = (id,stageId)=>(
    {
        type:actions.STAGES_DELETED,
        payload:{
            id,
            stageId
        }
    }
)
/*Frequency will work close with timer.js to provide notifications */
export const Monday=(id)=>({
    type:actions.MONDAY,
    payload:{
        id
    }
})
export const Tuesday=(id)=>({
    type:actions.TUESDAY,
    payload:{
        id
    }
})
export const Wednesday=(id)=>({
    type:actions.WEDNESDAY,
    payload:{
        id
    }
})
export const Thursday=(id)=>({
    type:actions.THURSDAY,
    payload:{
        id
    }
})
export const Friday=(id)=>({
    type:actions.FRIDAY,
    payload:{
        id
    }
})
export const Saturday=(id)=>({
    type:actions.SATURDAY,
    payload:{
        id
    }
})
export const Sunday=(id)=>({
    type:actions.SUNDAY,
    payload:{
        id
    }
})

export const createHabit=(title,totalTime)=>({
    type:actions.ADD_HABIT,
    payload:{
        title,
        totalTime
    }
})

export const deleteHabit=(id)=>({
    type:actions.DELETE_HABIT,
    payload:{
        id
    }
})

export const toggleYouTube=(id)=>({
type:actions.YOUTUBE,
payload:{
    id
}
})
export const toggleSpotify=(id)=>({
    type:actions.SPOTIFY,
    payload:{
        id
    }
})
export const toggleCamera=(id)=>({
    type:actions.CAMERA,
    payload:{
        id
    }
})