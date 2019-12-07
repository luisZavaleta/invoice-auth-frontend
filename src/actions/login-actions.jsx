import axios from 'axios';

export const ON_LOGIN_EMAIL_CHANGE = "LOGIN_EMAIL_CHANGE";
export const ON_LOGIN_PASSWORD_CHANGE = "LOGIN_PASSWORD_CHANGE";
export const PERFORM_LOGIN = "PERFORM_LOGIN";
export const PERFORM_LOGIN_SUCCESS = "PERFORM_LOGIN_SUCCESS";
export const PERFORM_LOGIN_FAIL = "PERFORM_LOGIN_FAIL";

const API_BASE_URL = process.env.REACT_APP_BASE_PATH;

const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export function performLogin(user){
	return dispatch => {
		axiosClient.post(API_BASE_URL + "/authenticate", user)
			.then(resp =>{
				dispatch(performLoginSucess(resp.data));
			}).catch(error => {
    			dispatch(performLoginFail(error.response.data));
			});
	}
}

export function performLoginSucess(data){
	return{
		type: PERFORM_LOGIN_SUCCESS,
		payload: data,
	};
}

export function performLoginFail(data){
	return{
		type: PERFORM_LOGIN_FAIL,
		payload: {
			status: data.status, 
			message: (data.status === 401) ? "User or Password not valid, please try again" :  data.message
		},
	};
}

export function onUsernameChange(username){
	return{
		type: ON_LOGIN_EMAIL_CHANGE,
		payload: {username: username}
	};
}

export function onPasswordChange(password){
	return{
		type: ON_LOGIN_PASSWORD_CHANGE,
		payload: {password: password}
	};
}
