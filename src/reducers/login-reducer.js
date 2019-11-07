import {CREATE_USER, CREATE_USER_SUCCEEDED, CREATE_USER_FAILED, CREATE_NEW_USER} from '../actions/login-actions';





function loginReducer(state, action){
	
	if(state === undefined){


		return { 
			statusCode: null,
			user: {
				id: '',
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
			alert(JSON.stringify(payload, null, "\t"));
			

			return 	{
				...state,
				user: payload
			}

		case CREATE_USER_SUCCEEDED:

			alert(action.type)
			alert("Payload=>"+JSON.stringify(payload, null, "\t"));

			return state;


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

			//return state;

		case CREATE_NEW_USER:
			alert(action.type)
			alert(JSON.stringify(payload, null, "\t"));

			return state;
					


			

		default:
			return state;

	}

}

export default loginReducer;