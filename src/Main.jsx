import React, {Component} from "react";

import {Route, NavLink, Switch, BrowserRouter} from "react-router-dom";
import SignIn from "./SignIn";
import Hello from "./Hello";
import Container from '@material-ui/core/Container';


class Main extends Component{


	render(){
		return(
			<BrowserRouter>
				<div>
				<div>here</div>
				<Switch>
			  		<Container component="main" maxWidth="xs">
			  			<Route path="/hello" component={Hello}/>
			  			<Route path="/signin" component={SignIn}/>
			  		</Container>
				</Switch>
				</div>
			</BrowserRouter>
		);
	}
	

}

export default Main;

