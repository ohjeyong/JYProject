/**
 * Created by oh on 5/19/17.
 */
import { FILTER_CATEGORY } from '../actions';

const initialState = {
    category: 'ALL',
    completeState: 'all',
    term: ''
};

export default function(state=initialState, action) {
    switch (action.type){
        case FILTER_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        default:
            return state
    }
}