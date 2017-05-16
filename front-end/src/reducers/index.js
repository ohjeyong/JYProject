/**
 * Created by oh on 5/16/17.
 */
import { combineReducers } from 'redux';
import TodoListReducer from './reducer_todo_list';

const rootReducer = combineReducers({
    todoList: TodoListReducer
});

export default rootReducer;
