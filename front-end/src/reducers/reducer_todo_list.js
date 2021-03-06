/**
 * Created by oh on 5/16/17.
 */
import _ from 'lodash';
import { FETCH_TODO_LIST, COMPLETE_TODO, REVERT_COMPLETE_TODO, REMOVE_TODO, ADD_LIKE, ADD_TODO, CLEAR_TODO_LIST, ADD_TODO_COMMENT, REMOVE_TODO_COMMENT } from '../actions';

export default function(state={}, action) {
    switch (action.type){
        case FETCH_TODO_LIST:
            return _.mapKeys(action.payload.data, 'id');
        case COMPLETE_TODO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case REVERT_COMPLETE_TODO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case REMOVE_TODO:
            const newState = Object.assign({}, state);
            delete newState[action.todoId];
            return newState;
        case ADD_LIKE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case ADD_TODO:
            return { ...state, [action.payload.data.id]: action.payload.data};
        case CLEAR_TODO_LIST:
            return {};
        case ADD_TODO_COMMENT:
            return { ...state, [action.payload.data.id]: action.payload.data};
        case REMOVE_TODO_COMMENT:
            return { ...state, [action.payload.data.id]: action.payload.data};
        default:
            return state
    }
}
