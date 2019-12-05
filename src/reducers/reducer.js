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

import {
	ON_FORGOT_PASSWORD_USERNAME_CHANGE,
	ON_FORGOT_PASSWORD_SUCCESS,
	ON_FORGOT_PASSWORD_FAIL
} from '../actions/forgot-password-actions';


import {
	ON_CHANGE_PASSWORD_CONSTRUCT,
	ON_CHANGE_PASSWORD_PASSWORD_CHANGE ,
	ON_CHANGE_PASSWORD_CONFIRM_PASSWORD_CHANGE,
	ON_CHANGE_PASSWORD_SUCESS,
	ON_CHANGE_PASSWORD_FAIL
} from '../actions/change-password-actions';

import {
	ON_VALIDATE_MAIL_SUCCESS,
	ON_VALIDATE_MAIL_FAIL,
	ON_RESEND_VALIDATION_MAIL_SUCCESS,
	ON_RESEND_VALIDATION_MAIL_FAIL
} from '../actions/validate-mail-actions';





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
				token: '',
				errorCount: 0,
				errors: []
			},
			forgotPassword:{
				status: null,
				username: '',
				enable: ''
			},
			validateMail: {
				token: '',
				message: ''
			},
			resendValidationMailMessage: ''
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

		case ON_FORGOT_PASSWORD_USERNAME_CHANGE:
		return {
			...state,
			forgotPassword:{
				...state.forgotPassword,
				username: payload.username
			}
		}

		case ON_FORGOT_PASSWORD_SUCCESS:

		return {
			...state,
			forgotPassword:{
				status: payload.status,
				username: payload.username,
				enable: payload.enable
			}
		}

		case ON_FORGOT_PASSWORD_FAIL:
		return {
			...state,
			forgotPassword:{
				status: payload.status,
				username: '',
				enable: ''
			}
		}

		case ON_CHANGE_PASSWORD_CONSTRUCT:
			return {
				...state,
				resetPassword:{
					...state.resetPassword,
					token: payload.token,
					username: payload.username
					
				}
			}

		case ON_CHANGE_PASSWORD_PASSWORD_CHANGE:
			return {
				...state,
				resetPassword:{
					...state.resetPassword,
					password: payload.password
				}
			}


		case ON_CHANGE_PASSWORD_CONFIRM_PASSWORD_CHANGE:
			return {
				...state,
				resetPassword:{
					...state.resetPassword,
					confirmPassword: payload.confirmPassword
				}
			}

		case ON_CHANGE_PASSWORD_SUCESS:
			return {
				...state,
				resetPassword:{
					...state.resetPassword,
					status:payload.status,
					username: payload.username,
					password:'',
					confirmPassword: '',
					token: '',
					errorCount: 0,
					errors: []
				}
			}


		case ON_CHANGE_PASSWORD_FAIL:
			return {
				...state,
				resetPassword:{
					...state.resetPassword,
					status:payload.status,
					password:'',
					confirmPassword: '',
					errorCount: payload.errorCount,
					errors: payload.errors
				}
			}

		case ON_VALIDATE_MAIL_SUCCESS:
			return {
				...state,
				validateMail: {
					message: payload.message
				}
			}

		case ON_VALIDATE_MAIL_FAIL:
			return {
				...state,
				validateMail: {
					message: payload.message
				}
			}

		case ON_RESEND_VALIDATION_MAIL_SUCCESS:
			return {
				...state,
				resendValidationMailMessage: payload.message
			}


		case ON_RESEND_VALIDATION_MAIL_FAIL:
			return {
				...state,
				resendValidationMailMessage: payload.message
			}




		default:
			return state;

	}
}

export default reducer;


	
