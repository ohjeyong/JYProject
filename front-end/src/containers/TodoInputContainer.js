/**
 * Created by oh on 5/18/17.
 */
import TodoInput from '../components/TodoInput';
import { showAlert, hideAlert } from '../actions';
import { connect } from 'react-redux';


export default connect(null, { showAlert, hideAlert })(TodoInput);
