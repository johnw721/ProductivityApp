const InitialState=[{
    id: Number,
    title:String,
    totalTime:Number,
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
}]

export default InitialState;