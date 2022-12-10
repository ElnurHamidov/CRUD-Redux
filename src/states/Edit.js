import list from "./State";
import { combineReducers } from 'redux';

function edit(state={}, action){
    switch(action.type){
        case 'edit':
            return action.payload;
        default:
            return state;
    }
}

const combine = combineReducers({
    list,
    edit
})

export default combine;

