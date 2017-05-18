/**
 * Created by oh on 5/16/17.
 */
import { combineReducers } from 'redux';
import TodoListReducer from './reducer_todo_list';
import TodoInputReducer from './reducer_todo_input';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
    todoList: TodoListReducer,
    todoInput: TodoInputReducer,
    alert: AlertReducer,
});

export default rootReducer;
