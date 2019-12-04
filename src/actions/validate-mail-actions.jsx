import axios from 'axios';

export const ON_VALIDATE_MAIL_CONSTRUCT = "ON_VALIDATE_MAIL_CONSTRUCT";
export const ON_VALIDATE_MAIL_SUCCESS = "ON_VALIDATE_MAIL_SUCCESS";
export const ON_VALIDATE_MAIL_FAIL = "ON_VALIDATE_MAIL_FAIL";


const API_BASE_URL = process.env.REACT_APP_BASE_PATH;


const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});


export function onValidateMailConstruct(token){
	return dispatch => {

		axiosClient.get(API_BASE_URL + "/mail/validate?token="+token)
			.then(resp =>{
				dispatch(onValidateMailSuccess("Your Account Had been validated"));
			}).catch(error => {
    			dispatch(onValidateMailFail("We were not able to validate your account"));
			});
	}
}





export function onValidateMailSuccess(message){
	return{
		type: ON_VALIDATE_MAIL_SUCCESS,
		payload: {message: message}
	};
}

export function onValidateMailFail(message){
	return{
		type: ON_VALIDATE_MAIL_FAIL,
		payload: {message: message}
	};
}

