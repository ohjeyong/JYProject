/**
 * Created by oh on 5/18/17.
 */
import TodoInput from '../components/TodoInput';
import { showAlert, hideAlert, addTodo } from '../actions';
import { connect } from 'react-redux';


export default connect(null, { showAlert, hideAlert, addTodo })(TodoInput);
