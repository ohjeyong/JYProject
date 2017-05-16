/**
 * Created by oh on 5/16/17.
 */
import _ from 'lodash';
import { FETCH_TODO_LIST } from '../actions';

export default function(state={}, action) {
    switch (action.type){
        case FETCH_TODO_LIST:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state
    }
}