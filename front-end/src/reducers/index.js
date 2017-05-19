/**
 * Created by oh on 5/16/17.
 */
import { combineReducers } from 'redux';
import TodoListReducer from './reducer_todo_list';
import TodoInputReducer from './reducer_todo_input';
import AlertReducer from './reducer_alert';
import TodoFilterReducer from './reducer_todo_filter';

const rootReducer = combineReducers({
    todoList: TodoListReducer,
    todoInput: TodoInputReducer,
    alert: AlertReducer,
    todoFilter: TodoFilterReducer
});

export default rootReducer;
