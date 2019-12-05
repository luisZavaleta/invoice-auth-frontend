import axios from 'axios';

export const ON_VALIDATE_MAIL_CONSTRUCT = "ON_VALIDATE_MAIL_CONSTRUCT";
export const ON_VALIDATE_MAIL_SUCCESS = "ON_VALIDATE_MAIL_SUCCESS";
export const ON_VALIDATE_MAIL_FAIL = "ON_VALIDATE_MAIL_FAIL";


export const ON_RESEND_VALIDATION_MAIL = "ON_RESEND_VALIDATION_MAIL";
export const ON_RESEND_VALIDATION_MAIL_SUCCESS = "ON_RESEND_VALIDATION_MAIL_SUCCESS";
export const ON_RESEND_VALIDATION_MAIL_FAIL = "ON_RESEND_VALIDATION_MAIL_FAIL";


const API_BASE_URL = process.env.REACT_APP_BASE_PATH;


const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});


/********************************************
	VALIDATE ACCOUNT USING LINK SENT TO MAIL
***********************************************/


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


/********************************************
	RE-SEND VALIDATION MAIL 
***********************************************/


export function onResendValidationMail(username){
	return dispatch => {

		axiosClient.post(API_BASE_URL + "/mail/resendverification", {"username": username})
			.then(resp =>{
				dispatch(onResendValidationMailSuccess("We have send you a mail to validate your account"));
			}).catch(error => {
    			dispatch(onValidateMailFail("We could not send the mail to validate your account, please try later"));
			});
	}
}

export function onResendValidationMailSuccess(message){
	return{
		type: ON_RESEND_VALIDATION_MAIL_SUCCESS,
		payload: {message: message}
	};
}

export function onResendValidationMailFail(message){
	return{
		type: ON_RESEND_VALIDATION_MAIL_FAIL,
		payload: {message: message}
	};
}

