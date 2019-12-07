import {connect} from "react-redux";
import Login from "../base/Login"

function mapStateToProps(state){
	return {
		login : state.login,
		resendValidationMailMessage : state.resendValidationMailMessage
	};
}

export default connect(mapStateToProps)(Login);