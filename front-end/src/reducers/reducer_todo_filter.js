/**
 * Created by oh on 5/19/17.
 */
import { FILTER_CATEGORY, FILTER_COMPLETE_STATE, FILTER_SEARCH_INPUT } from '../actions';

const initialState = {
    category: 'ALL',
    completeState: '0',
    term: ''
};

export default function(state=initialState, action) {
    switch (action.type){
        case FILTER_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        case FILTER_COMPLETE_STATE:
            return {
                ...state,
                completeState: action.completeState
            };
        case FILTER_SEARCH_INPUT:
            return {
                ...state,
                term: action.term
            };
        default:
            return state
    }
}