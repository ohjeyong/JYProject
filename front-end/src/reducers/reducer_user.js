/**
 * Created by oh on 5/25/17.
 */
import { FETCH_USER_INFO } from '../actions';


export default function (state={}, action){
    switch (action.type){
        case FETCH_USER_INFO:
            return action.payload.data;
        default:
            return state
    }
}