import {connect} from "react-redux";
import Login from "../base/Login"

function mapStateToProps(state){
	return {
		login : state.login
	};
}

export default connect(mapStateToProps)(Login);

