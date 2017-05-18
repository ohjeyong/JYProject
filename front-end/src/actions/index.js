/**
 * Created by oh on 5/16/17.
 */
import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";


export const FETCH_TODO_LIST = 'fetch_todo_list';
export const COMPLETE_TODO = 'complete_todo';
export const REVERT_COMPLETE_TODO = 'revert_complete_todo';
export const REMOVE_TODO = 'remove_todo';
export const ADD_LIKE = 'add_like';

export const SHOW_TODO_INPUT = 'show_todo_input';

export const SHOW_ALERT = 'show_alert';
export const HIDE_ALERT = 'hide_alert';

export function fetchTodoList(){
    const request = axios.get('/api/todo/');

    return {
        type: FETCH_TODO_LIST,
        payload: request
    }

}

export function completeTodo(id){
    const request = axios.post(`/api/todo/${id}/complete/`);

    return {
        type: COMPLETE_TODO,
        payload: request
    }

}

export function revertCompleteTodo(id){
    const request = axios.post(`/api/todo/${id}/revert_complete/`);

    return {
        type: REVERT_COMPLETE_TODO,
        payload: request
    }
}

export function removeTodo(id){
    axios.delete(`/api/todo/${id}/`);

    return {
        type: REMOVE_TODO,
        todoId: id
    }
}

export function addLike(id){
    const request = axios.post(`/api/todo/${id}/add_like/`);

    return {
        type: ADD_LIKE,
        payload: request
    }
}

export function showTodoInput(){
    return {
        type: SHOW_TODO_INPUT,
    }
}

export function showAlert(payload){
    return {
        type: SHOW_ALERT,
        alertPayload: payload
    }
}

export function hideAlert(){
    return {
        type: HIDE_ALERT
    }
}
