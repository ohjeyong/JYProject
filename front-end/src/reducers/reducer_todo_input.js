/**
 * Created by oh on 5/18/17.
 */
import { SHOW_TODO_INPUT } from '../actions';


const initialState = {
    show: false
};

export default function(state=initialState, action) {
    switch (action.type){
        case SHOW_TODO_INPUT:
            return {
                ...state,
                show: true
            };
        default:
            return state
    }
}
