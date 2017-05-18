/**
 * Created by oh on 5/18/17.
 */
import Alert from '../components/Alert';
import { connect } from 'react-redux';


function mapStateToProps(state){
    return {
        alertPayload: state.alert
    }
}

export default connect(mapStateToProps)(Alert);
