import axios from 'axios';

export const ON_CHANGE_PASSWORD_CONSTRUCT = "ON_CHANGE_PASSWORD_CONSTRUCT";
export const ON_CHANGE_PASSWORD_PASSWORD_CHANGE = "ON_CHANGE_PASSWORD_PASSWORD_CHANGE";
export const ON_CHANGE_PASSWORD_CONFIRM_PASSWORD_CHANGE = "ON_CHANGE_PASSWORD_CONFIRM_PASSWORD_CHANGE";
export const ON_CHANGE_PASSWORD_SUBMIT = "ON_CHANGE_PASSWORD_SUBMIT"
export const ON_CHANGE_PASSWORD_SUCESS = "ON_CHANGE_PASSWORD_SUCESS"
export const ON_CHANGE_PASSWORD_FAIL = "ON_CHANGE_PASSWORD_FAIL"

const API_BASE_URL = process.env.REACT_APP_BASE_PATH;

const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});


export function onChangePasswordConstruct(token, username){
	return{
		type: ON_CHANGE_PASSWORD_CONSTRUCT,
		payload: {token: token, username:username}
	};
}

export function onChangePasswordPasswordChange(password){
	return{
		type: ON_CHANGE_PASSWORD_PASSWORD_CHANGE,
		payload: {password: password}
	};
}

export function onChangePasswordConfirmPasswordChange(confirmPassword){
	return{
		type: ON_CHANGE_PASSWORD_CONFIRM_PASSWORD_CHANGE,
		payload: {confirmPassword: confirmPassword}
	};
}

export function onChangePasswordSubmit(resetPassword){

	return dispatch => {

		axiosClient.post(API_BASE_URL + "/mail/resetpassword", 
			{
				token: resetPassword.token, 
				password: resetPassword.password, 
				confirmPassword: resetPassword.confirmPassword
			})

			.then(resp =>{
				dispatch(onChangePasswordSuccess(resp.data));
			}).catch(error => {
	
    			dispatch(onChangePasswordFail(error.response.data));
			});
	}
}



export function onChangePasswordSuccess(data){

	return{
		type: ON_CHANGE_PASSWORD_SUCESS,
		payload: {
			username: data.username,
			active: data.active,
			status: data.status
		}
	};

}

export function onChangePasswordFail(data){
	
	return{
		type: ON_CHANGE_PASSWORD_FAIL,
		payload: {
			status: data.status,
			errorCount: data.status === 500 ? 1 : data.errors.length,
			errors: data.status === 500 ? ["Token is not valid"] : data.errors.map((error) => error.defaultMessage)
		}
	};

}




















