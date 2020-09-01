import axios from "axios";
import envs from "../config";
import { types } from "../store/reducer";

//Fetch user list from api
export function fetchUserlist() {
	return function (dispatch: any, getState: any) {
		const state: any = getState();
		const apiToken: any = state.apiToken.token;
		return axios
			.get(`${envs.API_URL}/users`, {
				headers: {
					Authorization: apiToken,
				},
			})
			.then((response) => {
				dispatch({
					type: types.USER_LIST,
					payload: response.data.Userlist,
				});
			})
			.catch((error) => {
				dispatch({
					type: types.ERROR,
					payload: error,
				});
			});
	};
}

//Fetch user with userID from api
export function fetchUser(userID: string) {
	return function (dispatch: any, getState: any) {
		const state: any = getState();
		const apiToken: any = state.apiToken.token;
		return axios
			.get(`${envs.API_URL}/users/${userID}`, {
				headers: {
					Authorization: apiToken,
				},
			})
			.then((response) => {
				dispatch({
					type: types.USER,
					payload: response.data.Userlist,
				});
			})
			.catch((error) => {
				dispatch({
					type: types.ERROR,
					payload: error,
				});
			});
	};
}

//Add user in the api
export function createUser(formData: { username: string; password: string; fullName: string; avatar: string }) {
	return function (dispatch: any, getState: any) {
		const state: any = getState();
		const apiToken: any = state.apiToken.token;
		return axios
			.post(`${envs.API_URL}/users/add`, formData, {
				headers: {
					Authorization: apiToken,
				},
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				dispatch({
					type: types.ERROR,
					payload: error,
				});
			});
	};
}

//Update user in the api
export function updateUser(formData: {
	userID: string;
	username: string;
	password: string;
	fullName: string;
	avatar: string;
}) {
	return function (dispatch: any, getState: any) {
		const state: any = getState();
		const apiToken: any = state.apiToken.token;
		return axios
			.put(`${envs.API_URL}/users/update/${formData.userID}`, formData, {
				headers: {
					Authorization: apiToken,
				},
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				dispatch({
					type: types.ERROR,
					payload: error,
				});
			});
	};
}

//Delete user in the api
export function deleteUser(userID: string) {
	return function (dispatch: any, getState: any) {
		const state: any = getState();
		const apiToken: any = state.apiToken.token;
		return axios
			.delete(`${envs.API_URL}/users/delete/${userID}`, {
				headers: {
					Authorization: apiToken,
				},
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				dispatch({
					type: types.ERROR,
					payload: error,
				});
			});
	};
}
