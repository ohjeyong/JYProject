/**
 * Created by oh on 5/17/17.
 */
import { connect } from 'react-redux';
import { fetchTodoList } from '../actions';
import TodoIndex from '../components/TodoIndex';


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
};

const TodoIndexContainer = connect(mapStateToProps, { fetchTodoList })(TodoIndex);

export default TodoIndexContainer;