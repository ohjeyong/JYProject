/**
 * Created by oh on 5/19/17.
 */
import { FILTER_CATEGORY, FILTER_COMPLETE_STATE } from '../actions';

const initialState = {
    category: 'ALL',
    completeState: '1',
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
        default:
            return state
    }
}