/**
 * Created by oh on 5/19/17.
 */
import FilterCategory from '../components/FilterCategory';
import { connect } from 'react-redux';
import { filterCategory } from '../actions';

function mapStateToProps(state){
    return {
        filter: state.todoFilter
    };
}

export default connect(mapStateToProps, { filterCategory })(FilterCategory);
