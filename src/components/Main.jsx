import React, {Component} from "react";

import {Route, Switch, BrowserRouter} from "react-router-dom";
import SignIn from "./connected/SignInHOC";
import LogIn from "./connected/LogInHOC";
import ChangePassword from "./connected/ChangePasswordHOC";
import SignInSucessful from "./base/SignInSuccessful";
import Container from '@material-ui/core/Container';
import ForgotPassword from "./connected/ForgotPasswordHOC";
import ValidateMail from "./connected/ValidateMailHOC";
import Home from "./connected/HomeHOC";
import { CookiesProvider } from 'react-cookie';
import { withCookies } from 'react-cookie';

class Main extends Component{
 
	render(){
		return(
			<CookiesProvider>
				<BrowserRouter>
					<Switch>
				  		<Container component="main" maxWidth="xs">
				  			<Route path="/signup" component={SignIn}/>
				  			<Route path="/signinsucess" component={SignInSucessful}/>				  			
				  			<Route path="/login"  render={() => (<LogIn cookies={this.props.cookies}/>)}/>
				  			<Route path="/changepassword/:token/:username" component={ChangePassword}/>
				  			<Route path="/forgotpassword" component={ForgotPassword}/>
				  			<Route path="/validatemail/:token" component={ValidateMail}/>
				  			<Route exact path="/"  render={() => (<Home cookies={this.props.cookies}/>)}/>				  							
				  		</Container>
					</Switch>
				</BrowserRouter>
			</CookiesProvider>
		);
	}

}


export default withCookies(Main);