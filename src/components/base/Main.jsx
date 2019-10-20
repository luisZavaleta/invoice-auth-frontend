import React, {Component} from "react";

import {Route, NavLink, Switch, BrowserRouter} from "react-router-dom";
import SignIn from "./SignIn";
import Hello from "./Hello";
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";


class Main extends Component{


	render(){
		return(
			<BrowserRouter>
				<Switch>
			  		<Container component="main" maxWidth="xs">
			  			<Route path="/hello" component={Hello}/>
			  			<Route path="/signin" component={SignIn}/>
			  		</Container>
				</Switch>
			</BrowserRouter>
		);
	}

}

function mapStateToProps(state){
	return {
		user: state.user
	};
}

var loginAction = {type: "login"};
var signupAction = {type: "signup"}

function mapDispatchToProps(dispatch){
	return{
		loginAction: function() {
			return dispatch(loginAction);
		},
		signupAction: function(){
			return dispatch(signupAction);
		}
	};
}

var mainWithRedux = connect(
		mapStateToProps,
		mapDispatchToProps

	)(Main);

export default mainWithRedux;

