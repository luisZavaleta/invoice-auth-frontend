import axios from 'axios';


export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCEEDED = "CREATE_USER_SUCCEEDED";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const CREATE_NEW_USER = "CREATE_USER";
export const ON_FIRSTNAME_BLUR = "ON_FIRSTNAME_BLUR";
export const ON_LASTNAME_BLUR = "ON_LASTNAME_BLUR";
export const ON_USERNAME_BLUR = "ON_USERNAME_BLUR";
export const ON_PASSWORD_BLUR = "ON_PASSWORD_BLUR";
export const ON_CONFIRMPASSWORD_BLUR = "ON_CONFIRMPASSWORD_BLUR";


const API_BASE_URL = 'http://localhost:8082';

const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});



export function createUser(user){
	return{
		type: CREATE_USER,
		payload: user,
	};
}


export function createUserSucceeded(user){
	return{
		type: CREATE_USER_SUCCEEDED,
		payload: user,
	};
}


export function createUserFailed(user, error){
	return{
		type: CREATE_USER_FAILED,
		payload: {user, error}
	};
}

export function createNewUser(user){

	return dispatch => {
		axiosClient.post(API_BASE_URL + "/signin", user)
			.then(resp =>{
				dispatch(createUserSucceeded(resp.data));
			}).catch(error => {
    			dispatch(createUserFailed(user, error.response));
			});
	}

}



export function onFirstNameBlur(firstName){

	console.log("action==>"+ firstName)
	
	return{
		type: ON_FIRSTNAME_BLUR,
		payload: {firstName: firstName},
	};
}


export function onLastNameBlur(lastName){
	return{
		type: ON_LASTNAME_BLUR,
		payload: {lastName: lastName},
	};
}


export function onUserNameBlur(userName){
	return{
		type: ON_USERNAME_BLUR,
		payload: {username: userName},
	};
}

export function onPasswordBlur(password){
	return{
		type: ON_PASSWORD_BLUR,
		payload: {password: password},
	};
}


export function onConfirmPasswordBlur(confirmPassword){
	return{
		type: ON_CONFIRMPASSWORD_BLUR,
		payload: {confirmPassword: confirmPassword},
	};
}






