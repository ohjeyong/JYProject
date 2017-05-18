/**
 * Created by oh on 5/18/17.
 */
import TodoInput from '../components/TodoInput';
import { showAlert, hideAlert, addTodo, hideTodoInput } from '../actions';
import { connect } from 'react-redux';


function mapStateToProps(state){
    return{
        show: state.todoInput.show
    };
}

export default connect(mapStateToProps, { showAlert, hideAlert, addTodo, hideTodoInput })(TodoInput);
