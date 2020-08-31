import axios from "axios";
import envs from "../config/index";
import { Types } from "../store/reducer";

export function login(username: string, password: string) {
	return function (dispatch: any) {
		return axios
			.post(`${envs.API_URL}/login`, {
				username: username,
				password: password,
			})
			.then((response) => {
				dispatch({
					type: Types.TOKEN,
					payload: response.data.Token,
				});
				dispatch({
					type: Types.LOGGEDUSER,
					payload: response.data.Data,
				});
				return Promise.resolve(true);
			})
			.catch((error) => {
				dispatch({
					type: Types.ERROR,
					payload: error.response.data.ErrorMsg,
				});
				return Promise.resolve(false);
			});
	};
}

export function signIn(
	username: string,
	password: string,
	fullname: string,
	avatar: string
) {
	return function (dispatch: any) {
		return axios
			.post(`${envs.API_URL}/signup`, {
				username: username,
				password: password,
				fullname: fullname,
				avatar: avatar,
			})
			.then((response) => {
				if (response.data) {
					return Promise.resolve(true);
				}
			})
			.catch((error) => {
				dispatch({
					type: Types.ERROR,
					payload: error,
				});
				return Promise.resolve(false);
			});
	};
}
