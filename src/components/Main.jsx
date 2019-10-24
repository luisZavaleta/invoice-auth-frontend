import React, {Component} from "react";

import {Route, Switch, BrowserRouter} from "react-router-dom";
import SignIn from "./connected/SignInHOC";
import Hello from "./base/Hello";
import Container from '@material-ui/core/Container';



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


export default Main;

