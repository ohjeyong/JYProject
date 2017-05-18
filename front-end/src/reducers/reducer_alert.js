/**
 * Created by oh on 5/18/17.
 */
import { SHOW_ALERT, HIDE_ALERT } from '../actions';

const initialState = {
    visibility: false,
    message: "",
    backgroundColor: 'rgba(0,0,0,0.8)',
    fontColor: 'white'
};

export default function(state=initialState, action) {
    switch(action.type) {
        case SHOW_ALERT:
            return action.alertPayload;
        case HIDE_ALERT:
            return {
                visibility: false,
                message: '',
                backgroundColor: '',
                fontColor: ''
            };
        default:
            return state
    }
}
