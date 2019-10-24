
export const CREATE_USER = "CREATE_USER";




export const createUser = (dispatch, user) => dispatch({
					type: CREATE_USER,
					user :{
						name: user.name
					}
				})





export const loginAction = {type: "login"};
export const signupAction = {type: "signup"}