/**
 * Created by oh on 5/17/17.
 */
import { connect } from 'react-redux';
import { fetchTodoList, removeTodo } from '../actions';
import TodoIndex from '../components/TodoIndex';


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
};

const TodoIndexContainer = connect(mapStateToProps, { fetchTodoList, removeTodo })(TodoIndex);

export default TodoIndexContainer;