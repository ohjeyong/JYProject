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
export const ADD_TODO = 'add_todo';
export const CLEAR_TODO_LIST = 'clear_todo_list';

export const SHOW_TODO_INPUT = 'show_todo_input';
export const HIDE_TODO_INPUT = 'hide_todo_input';

export const SHOW_ALERT = 'show_alert';
export const HIDE_ALERT = 'hide_alert';

export const FILTER_CATEGORY = 'filter_category';
export const FILTER_COMPLETE_STATE = 'filter_complete_state';
export const FILTER_SEARCH_INPUT = 'filter_search_input';

export const FETCH_TAG_LIST = 'fetch_tag_list';

export const FETCH_USER_INFO = 'fetch_user_info';
export const LOGOUT = 'logout';

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

export function clearTodoList(){
    return {
        type: CLEAR_TODO_LIST
    }
}

export function hideTodoInput(){
    return {
        type: HIDE_TODO_INPUT
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

export function addTodo(category, content, tags){
    const request = axios.post(`/api/todo/`, {category: category, content: content, tags: tags});
    return {
        type: ADD_TODO,
        payload: request
    }
}

export function filterCategory(category){
    return {
        type: FILTER_CATEGORY,
        category
    };
}

export function filterCompleteState(completeState){
    return {
        type: FILTER_COMPLETE_STATE,
        completeState
    }
}

export function filterSearchInput(term){
    return {
        type: FILTER_SEARCH_INPUT,
        term
    }
}

export function fetchTagList(){
    const request = axios.get('/api/tag/');
    return {
        type: FETCH_TAG_LIST,
        payload: request
    }
}

export function fetchUserInfo(){
    const request = axios.get('/api/user/me');
    return {
        type: FETCH_USER_INFO,
        payload: request
    }
}

export function logout(){
    const request = axios.get('/api/user/logout');
    return {
        type: LOGOUT,
        payload: request
    }
}