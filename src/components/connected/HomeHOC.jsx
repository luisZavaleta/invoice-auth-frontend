import {connect} from "react-redux";
import Home from "../base/Home"

function mapStateToProps(state, ownProps){
	return {
		login : state.login,
		cookies: ownProps.cookies
	};
}

export default connect(mapStateToProps)(Home);