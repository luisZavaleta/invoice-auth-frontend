import {connect} from "react-redux";
import Login from "../base/Login"

function mapStateToProps(state, ownProps){
	return {
		login : state.login,
		resendValidationMailMessage : state.resendValidationMailMessage,
		cookies: ownProps.cookies
	};
}

export default connect(mapStateToProps)(Login);