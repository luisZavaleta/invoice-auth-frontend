

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

	}
}

export default loginReducer;