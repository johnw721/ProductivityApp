import InitialState from './InitialState';
import * as actions from '../actions/actionsType'
import {produce} from 'immer';

function supportProps(state=InitialState,action){
    switch(action.type){
        case actions.YOUTUBE:
            var yT = produce(state,draft=>{
                draft[action.payload.id].support.YouTube=!draft[action.payload.id].support.YouTube
            })
        /* Same process as the frequencyProps reducer
         */
            return yT;
        case actions.SPOTIFY:
            var spot = produce(state,draft=>{
                draft[action.payload.id].support.Spotify=!draft[action.payload.id].support.Spotify
            })
         /* Same process as the frequencyProps reducer
         */
            return spot;
        case actions.CAMERA:
            var cam = produce(state,draft=>{
                draft[action.payload.id].support.Camera=!draft[action.payload.id].support.Camera
            })
         /* Same process as the frequencyProps reducer
         */
            return cam;
        default:
            return state;
    }
}

export default supportProps;