/**
 * Created by oh on 5/18/17.
 */
import { SHOW_TODO_INPUT, HIDE_TODO_INPUT } from '../actions';


export default function(state={show: false}, action) {
    switch (action.type){
        case SHOW_TODO_INPUT:
            return {
                show: true
            };
        case HIDE_TODO_INPUT:
            return {
                show: false
            };
        default:
            return state
    }
}
