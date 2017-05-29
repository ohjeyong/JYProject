/**
 * Created by oh on 5/29/17.
 */
import { connect } from 'react-redux';
import TodoCommentInput from '../components/TodoCommentInput';
import { addTodoComment } from '../actions';


export default connect(null, { addTodoComment })(TodoCommentInput);
