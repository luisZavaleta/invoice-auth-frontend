import axios from 'axios';

export const ON_FORGOT_PASSWORD_USERNAME_CHANGE = "ON_FORGOT_PASSWORD_USERNAME_CHANGE";
export const ON_FORGOT_PASSWORD_SUBMIT = "ON_FORGOT_PASSWORD_SUBMIT";
export const ON_FORGOT_PASSWORD_SUCCESS = "ON_FORGOT_PASSWORD_SUCCESS";
export const ON_FORGOT_PASSWORD_FAIL = "ON_FORGOT_PASSWORD_FAIL";

const API_BASE_URL = process.env.REACT_APP_BASE_PATH;

const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export function onForgotPasswordUsernameChange(username){
	return{
		type: ON_FORGOT_PASSWORD_USERNAME_CHANGE,
		payload: {username: username}
	};
}

export function onForgotPasswordSucess(data){
	return{
		type: ON_FORGOT_PASSWORD_SUCCESS,
		payload: data
	};
}

export function onForgotPasswordFail(data){
	return{
		type: ON_FORGOT_PASSWORD_FAIL,
		payload: data
	};
}

export function forgotPasswordSubmit(username){
	return dispatch => {
		axiosClient.post(API_BASE_URL + "/changemail", {"username": username})
			.then(resp =>{

				console.log("sucess "+resp.data)
				dispatch(onForgotPasswordSucess(resp.data));
			}).catch(error => {
				console.log("fail" + error.response.data)
    			dispatch(onForgotPasswordFail(error.response.data));
			});
	}
}
