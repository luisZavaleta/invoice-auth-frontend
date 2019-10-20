import React, {Component} from "react";
import {connect} from "react-redux";
import SignIn from "../base/SignIn"
import { signupAction } from "../../actions/login-actions"



function mapStateToProps(state){
	return {
		user: state.user
	};
}



function mapDispatchToProps(dispatch){
	return{
		signup: function(){
			return dispatch(signupAction);
		}
	};
}



var signInWithRedux = connect(
		mapStateToProps,
		mapDispatchToProps

)(SignIn);

export default signInWithRedux;