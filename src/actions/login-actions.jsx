import axios from 'axios';


export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCEEDED = "CREATE_USER_SUCCEEDED";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const CREATE_NEW_USER = "CREATE_USER";

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