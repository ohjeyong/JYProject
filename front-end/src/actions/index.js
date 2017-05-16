/**
 * Created by oh on 5/16/17.
 */
import axios from 'axios';


export const FETCH_TODO_LIST = 'fetch_todo_list';

export function fetchTodoList(){
    const request = axios.get('/api/todo/');

    return {
        type: FETCH_TODO_LIST,
        payload: request
    }

}
