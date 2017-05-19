/**
 * Created by oh on 5/18/17.
 */
import TodoInput from '../components/TodoInput';
import { showAlert, hideAlert, addTodo, hideTodoInput, fetchTagList } from '../actions';
import { connect } from 'react-redux';


function mapStateToProps(state){
    return{
        show: state.todoInput.show,
        tagList: state.tagList
    };
}

export default connect(mapStateToProps, { showAlert, hideAlert, addTodo, hideTodoInput, fetchTagList })(TodoInput);
