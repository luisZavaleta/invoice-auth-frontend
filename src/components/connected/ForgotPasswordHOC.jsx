import {connect} from "react-redux";
import ForgotPassword from "../base/ForgotPassword"

function mapStateToProps(state){
	return {
		forgotPassword : state.forgotPassword
	};
}

export default connect(mapStateToProps)(ForgotPassword);

