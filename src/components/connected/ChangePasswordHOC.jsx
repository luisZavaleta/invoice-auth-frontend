import {connect} from "react-redux";
import ChangePassword from "../base/ChangePassword"

function mapStateToProps(state){
	return {
		login : state.resetPassword,
		errors: state.errors
	};
}

export default connect(mapStateToProps)(ChangePassword);

