/**
 * Created by oh on 5/29/17.
 */
import { connect } from 'react-redux';
import TodoCommentIndex from '../components/TodoCommentIndex';
import { removeTodoComment } from '../actions';


export default connect(null, { removeTodoComment })(TodoCommentIndex);
