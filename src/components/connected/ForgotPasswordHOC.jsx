import {connect} from "react-redux";
import ForgotPassword from "../base/ForgotPassword"

function mapStateToProps(state){
	return {
		forgotPassword : state.forgotPassword,
		resendValidationMailMessage : state.resendValidationMailMessage
	};
}

export default connect(mapStateToProps)(ForgotPassword);

