import {connect} from "react-redux";
import SignIn from "../base/SignIn"

function mapStateToProps(state){
	return {
		statusCode : state.statusCode,
		user: state.user,
		errors: state.errors
	};
}

export default connect(mapStateToProps)(SignIn);