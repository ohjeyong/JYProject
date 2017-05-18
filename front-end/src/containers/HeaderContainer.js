/**
 * Created by oh on 5/19/17.
 */
import Header from '../components/Header';
import { connect } from 'react-redux';
import { showTodoInput } from '../actions';

export default connect(null, { showTodoInput })(Header);
