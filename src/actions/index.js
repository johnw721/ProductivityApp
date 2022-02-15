export const addHabit=(title,hr,min,sec)=>({
    type:'ADD_HABIT',
    payload:{
        title,
       totalTime:{hr,min,sec}
    }
})

export const addStage=(title,hr,min,sec)=>({
    type:'ADD_STAGE',
    payload:{
        title,
        totalTotalTime:{hr,min,sec}
    }
})