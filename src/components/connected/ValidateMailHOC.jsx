import {connect} from "react-redux";
import ValidateMail from "../base/ValidateMail"

function mapStateToProps(state){
	return {
		validateMail : state.validateMail
	};
}

export default connect(mapStateToProps)(ValidateMail);