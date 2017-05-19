/**
 * Created by oh on 5/19/17.
 */
import { connect } from 'react-redux';
import CategoryMovingBorder from '../components/CategoryMovingBorder';

function mapStateToProps(state){
    return {
        filter: state.todoFilter
    }
}

export default connect(mapStateToProps)(CategoryMovingBorder);