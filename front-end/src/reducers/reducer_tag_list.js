/**
 * Created by oh on 5/19/17.
 */
import _ from 'lodash';
import { FETCH_TAG_LIST } from '../actions';

export default function(state=[], action){
    switch (action.type){
        case FETCH_TAG_LIST:
            const tagList = [];
            _.map(action.payload.data, tag => {
                tagList.push(tag.name);
            });
            return tagList;
        default:
            return state;
    }
}
