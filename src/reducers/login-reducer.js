import {
		CREATE_USER_SUCCEEDED, 
		CREATE_USER_FAILED, 
		ON_FIRSTNAME_CHANGE,
		ON_LASTNAME_CHANGE,
		ON_USERNAME_CHANGE,
		ON_PASSWORD_CHANGE,
		ON_CONFIRMPASSWORD_CHANGE

	} from '../actions/login-actions';



function loginReducer(state, action){
	
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
			}
		};
	}

	var {payload} = action;

	switch(action.type){
	
		case CREATE_USER_SUCCEEDED:
			return { 
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

		default:
			return state;

	}
}

export default loginReducer;
