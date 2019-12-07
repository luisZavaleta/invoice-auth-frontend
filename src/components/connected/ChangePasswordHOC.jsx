import {connect} from "react-redux";
import ChangePassword from "../base/ChangePassword"

function mapStateToProps(state){
	return {
		resetPassword : state.resetPassword
	};
}

export default connect(mapStateToProps)(ChangePassword);