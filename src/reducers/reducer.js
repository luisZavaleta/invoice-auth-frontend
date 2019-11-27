import {
		CREATE_USER_SUCCEEDED, 
		CREATE_USER_FAILED, 
		ON_FIRSTNAME_CHANGE,
		ON_LASTNAME_CHANGE,
		ON_USERNAME_CHANGE,
		ON_PASSWORD_CHANGE,
		ON_CONFIRMPASSWORD_CHANGE

	} from '../actions/signup-actions';


import {
	ON_LOGIN_EMAIL_CHANGE,
	ON_LOGIN_PASSWORD_CHANGE,
	PERFORM_LOGIN_SUCCESS,
	PERFORM_LOGIN_FAIL
} from '../actions/login-actions';



function reducer(state, action){
	
	if(state === undefined){
		return { 
			statusCode: null,
			user: {
				username: '',
				password: '',
				firstname: '',
				lastname: '',
				confirmPassword: ''
			},
			errors: {
				errorCount: 0,
				errors: []
			}, 
			login: {
				status: null,
				message:'',
				token:'',
				user: {
					username: '',
					password: ''
				}
			},
			resetPassword:{
				status:null,
				username: '',
				password:'',
				confirmPassword: '',
				token: ''
			}
		};
	}

	var {payload} = action;

	switch(action.type){
	
		case CREATE_USER_SUCCEEDED:
			return { 
				...state,
				statusCode: payload.status,
				user: {
					username: payload.username,
					firstname: payload.firstname,
					lastname: payload.lastname,
					password: '',
					confirmPassword: ''
				},
				errors: {
					errorCount: 0,
					errors: [
					]
				}
			};


		case CREATE_USER_FAILED:
			return { 
				...state,
				statusCode: payload.error.status,
				user: {
					username: payload.user.username,
					password: '',
					firstname: payload.user.firstname,
					lastname: payload.user.lastname,
					confirmPassword: '',
				},
				errors: {
					errorCount: payload.error.data.errors.length,
					errors: payload.error.data.errors.map(e => { return {
			                    code: e.code,
			                    message: e.defaultMessage,
			                    field: e.field
                    
             				}})
				}
			};

		
		case ON_FIRSTNAME_CHANGE:
			return 	{
				...state,
				user: {
					...state.user,
					firstname: payload.firstName
				}
			};


		case ON_LASTNAME_CHANGE:
			return 	{
				...state,
				user: {
					...state.user,
					lastname: payload.lastName
				}
			};


		case ON_USERNAME_CHANGE:
			return 	{
				...state,
				user: {
					...state.user,
					username: payload.userName
				}
			};


		case ON_PASSWORD_CHANGE:
			return 	{
				...state,
				user: {
					...state.user,
					password: payload.password
				}
			};


		case ON_CONFIRMPASSWORD_CHANGE:	
			return 	{
				...state,
				user: {
					...state.user,
					confirmPassword: payload.confirmPassword
				}
			};	

			case ON_LOGIN_EMAIL_CHANGE:	
			return 	{
				...state,
				login: {
					...state.login,
					user: {
						...state.login.user,
						username: payload.username	
					}
				}
			};	

			case ON_LOGIN_PASSWORD_CHANGE:	
			return 	{
				...state,
				login: {
					...state.login,
					user: {
						...state.login.user,
						password: payload.password	
					}
				}
			};	


			case PERFORM_LOGIN_SUCCESS:	
			return 	{
				...state,
				login: {
					...state.login,
					status: payload.status,
					token: payload.token,
					message: '',
				}
			};


			case PERFORM_LOGIN_FAIL:	
			return 	{
				...state,
				login: {
					...state.login,
					status: payload.status,
					message: payload.message,
					token: '',
					user: {
						...state.login.user,
						password: ''
					}

				}
			};	

		default:
			return state;

	}
}

export default reducer;
