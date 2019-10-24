import {CREATE_USER} from '../actions/login-actions';
import {createUser} from '../actions/login-actions';




function loginReducer(state, action){
	if(state === undefined){
		return { 
			user: {
				username: null,
				password: null,
				firstname: null,
				lastname: null,
				confirmPassword: null
			}
		};
	}

	var user = state.user;


	switch(action.type){

		case CREATE_USER:
			alert("requesting signup. "+ action.user.name);
			return{
				user: state.user
			};

		case "login":
			alert("Log In");
			return{
				user: state.user
			};
		
		case "signup":
			alert("Sign Up");
			return{
				user: state.user

			};

		default:
			return state;

	}

}

export default loginReducer;