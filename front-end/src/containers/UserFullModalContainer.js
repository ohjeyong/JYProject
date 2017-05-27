/**
 * Created by oh on 5/27/17.
 */
import { connect } from 'react-redux';
import UserFullModal from '../components/UserFullModal';
import { fetchUserInfo, fetchTodoList } from '../actions';


function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchUserInfo, fetchTodoList })(UserFullModal);
