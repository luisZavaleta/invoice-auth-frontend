import React, {Component} from "react";

import {Route, Switch, BrowserRouter, useParams} from "react-router-dom";
import SignIn from "./connected/SignInHOC";
import LogIn from "./connected/LogInHOC";
import ChangePassword from "./connected/ChangePasswordHOC";
import SignInSucessful from "./base/SignInSuccessful";
import Container from '@material-ui/core/Container';
import ForgotPassword from "./connected/ForgotPasswordHOC";




class Main extends Component{

 

	render(){
		return(
			<BrowserRouter>
				<Switch>
			  		<Container component="main" maxWidth="xs">
			  			<Route path="/signin" component={SignIn}/>
			  			<Route path="/signinsucess" component={SignInSucessful}/>
			  			<Route path="/login" component={LogIn}/>
			  			<Route path="/changepassword/:token/:username" component={ChangePassword}/>
			  			<Route path="/forgotpassword" component={ForgotPassword}/>
			  		</Container>
				</Switch>
			</BrowserRouter>
		);
	}

}


export default Main;

