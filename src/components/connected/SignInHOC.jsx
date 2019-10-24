import {connect} from "react-redux";
import SignIn from "../base/SignIn"
import { createUser } from "../../actions/login-actions"



function mapStateToProps(state){
	return {
		user: state.user
	};
}



const mapDispatchToProps =  dispatch => {
	return{
		onCreateUser: 
			user => createUser(dispatch, user)
	}

}




var signInWithRedux = connect(
		mapStateToProps,
		mapDispatchToProps

)(SignIn);

export default signInWithRedux;