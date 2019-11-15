import React, {Component} from "react";

import {Route, Switch, BrowserRouter} from "react-router-dom";
import SignIn from "./connected/SignInHOC";
import SignInSucessful from "./base/SignInSuccessful";
import Container from '@material-ui/core/Container';


class Main extends Component{


	render(){
		return(
			<BrowserRouter>
				<Switch>
			  		<Container component="main" maxWidth="xs">
			  			<Route path="/signin" component={SignIn}/>
			  			<Route path="/signinsucess" component={SignInSucessful}/>
			  		</Container>
				</Switch>
			</BrowserRouter>
		);
	}

}


export default Main;

