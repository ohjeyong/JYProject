/**
 * Created by oh on 5/16/17.
 */
import { completeTodo, revertCompleteTodo, addLike } from '../actions';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';


export default connect(null, { completeTodo, revertCompleteTodo, addLike })(TodoList);
