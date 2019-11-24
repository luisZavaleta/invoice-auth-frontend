import axios from 'axios';

export const CREATE_USER_SUCCEEDED = "CREATE_USER_SUCCEEDED";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const ON_FIRSTNAME_CHANGE = "ON_FIRSTNAME_CHANGE";
export const ON_LASTNAME_CHANGE = "ON_LASTNAME_CHANGE";
export const ON_USERNAME_CHANGE = "ON_USERNAME_CHANGE";
export const ON_PASSWORD_CHANGE = "ON_PASSWORD_CHANGE";
export const ON_CONFIRMPASSWORD_CHANGE = "ON_CONFIRMPASSWORD_CHANGE";


const API_BASE_URL = process.env.REACT_APP_BASE_PATH;

const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});



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


export function onFirstNameChange(firstName){
	
	return{
		type: ON_FIRSTNAME_CHANGE,
		payload: {firstName: firstName},
	};
}


export function onLastNameChange(lastName){
	return{
		type: ON_LASTNAME_CHANGE,
		payload: {lastName: lastName},
	};
}


export function onUserNameChange(userName){
	return{
		type: ON_USERNAME_CHANGE,
		payload: {userName: userName},
	};
}

export function onPasswordChange(password){
	return{
		type: ON_PASSWORD_CHANGE,
		payload: {password: password},
	};
}


export function onConfirmPasswordChange(confirmPassword){
	return{
		type: ON_CONFIRMPASSWORD_CHANGE,
		payload: {confirmPassword: confirmPassword},
	};
}
