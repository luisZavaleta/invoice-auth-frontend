import {
		CREATE_USER, 
		CREATE_USER_SUCCEEDED, 
		CREATE_USER_FAILED, 
		CREATE_NEW_USER,
		ON_FIRSTNAME_BLUR,
		ON_LASTNAME_BLUR,
		ON_USERNAME_BLUR,
		ON_PASSWORD_BLUR,
		ON_CONFIRMPASSWORD_BLUR

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
				errors: [
				]
			}

		};
		
		/*return { 
			status: 400,
			user: {
				id: null,
				username: null,
				password: null,
				firstname: null,
				lastname: null,
				confirmPassword: null
			},
			errors: {
				errorCount: 0,
				errors: [
					{
						code : "MatchPasswords",
						message: "Both passwords should be the same",
						field: "username",
					},
					{
						code : "MatchPasswords",
						message: "Both passwords should be the same",
						field: "username",

					}
				]
			}

		};
		*/



	}


	switch(action.type){


		case CREATE_USER:
			
			
			alert(action.type)
			alert("pl=>"+JSON.stringify(payload, null, "\t"));
			

			return 	{
				...state,
				user: payload
			}

		case CREATE_USER_SUCCEEDED:


			var {payload} = action;

			alert(action.type)
			alert("Payload=>"+JSON.stringify(payload, null, "\t"));


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
			}


		case CREATE_USER_FAILED:

			var {payload} = action;
			alert(JSON.stringify(payload, null, "\t"));


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


		case CREATE_NEW_USER:
			console.log(action.type)
			console.log(JSON.stringify(payload, null, "\t"));

			return state;
		
		case ON_FIRSTNAME_BLUR:
			var {payload} = action;
			console.log("reducer==>"+JSON.stringify(payload, null, "\t"));

		
			return 	{
				...state,
				user: {
					...state.user,
					firstname: payload.firstName
				}
			}

		case ON_LASTNAME_BLUR:

			var {payload} = action;

		
			return 	{
				...state,
				user: {
					...state.user,
					lastname: payload.lastName
				}
			}

		case ON_USERNAME_BLUR:
			var {payload} = action;
			console.log("reducer==>"+JSON.stringify(payload, null, "\t"));

		
			return 	{
				...state,
				user: {
					...state.user,
					username: payload.userName
				}
			}

		case ON_PASSWORD_BLUR:
			var {payload} = action;
			console.log("reducer==>"+JSON.stringify(payload, null, "\t"));

		
			return 	{
				...state,
				user: {
					...state.user,
					password: payload.password
				}
			}

		case ON_CONFIRMPASSWORD_BLUR:	
			var {payload} = action;
			console.log("reducer==>"+JSON.stringify(payload, null, "\t"));

		
			return 	{
				...state,
				user: {
					...state.user,
					confirmPassword: payload.confirmPassword
				}
			}	



			

		default:
			return state;

	}

}

export default loginReducer;