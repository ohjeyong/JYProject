/**
 * Created by oh on 5/19/17.
 */
import Header from '../components/Header';
import { connect } from 'react-redux';
import { showTodoInput, fetchUserInfo, fetchTodoList } from '../actions';

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { showTodoInput, fetchUserInfo, fetchTodoList })(Header);
