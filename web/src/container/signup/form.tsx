import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsernameList, signup } from "../../ducks/auth";
import { RouteComponentProps } from "react-router-dom";

import { PrimaryContainer, SecondContainer, UContainer, ContainerButton } from "./styles";
import ImageAvatar from "../../assets/avatar/avataaars.png";

const mapStateToProps = (state: { usernameList: {} }) => {
	return {
		usernameList: state.usernameList,
	};
};

interface props extends RouteComponentProps<any> {
	usernameList: any;
	fetchUsernameList: () => void;
	signup: (formData: { username: string; password: string; fullName: string; avatar: string }) => Promise<any>;
}

function SignUp(props: props) {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [fullName, setFullName] = useState<string>("");
	const [avatar, setAvatar] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [userExist, setUserExist] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		props.fetchUsernameList();
	}, []);

	const handleSubmit = () => {
		if (password.length < 6 && username.length !== 0) {
			setError("Senha deve ter 6 digitos ou mais!");
			setPassword("");
			return;
		}

		if (username.length === 0 && password.length !== 0) {
			setError("Preencha o campo usuário!");
			setUsername("");
			setPassword("");
			return;
		}

		if (fullName.length === 0 && username.length !== 0 && password.length !== 0) {
			setError("Preencha seu Nome completo!");
			setFullName("");
		}

		if (username !== "" || password !== "" || password.length >= 6 || fullName !== "") {
			const formdata: {
				username: string;
				password: string;
				fullName: string;
				avatar: string;
			} = {
				username: username,
				password: password,
				fullName: fullName,
				avatar: avatar,
			};
			setLoading(true);
			props.signup(formdata).then((response) => {
				if (response === "New user add in database") {
					props.history.push("/");
				} else {
					setError("Algo deu errado! Por favor tente novamente");
					setUsername("");
					setPassword("");
					setFullName("");
					setAvatar("");
				}
				setLoading(false);
			});
		} else {
			setError("Verifique os campos!");
		}
	};

	const handleChangeUsername = (username: string) => {
		const { usernameList } = props;
		let isEqual: number = 0;
		usernameList.map((name: string) => {
			if (name === username) {
				isEqual++;
			}
			return null;
		});
		if (isEqual !== 0) {
			setUserExist("Este usuário já existe!");
		} else {
			setUserExist("");
		}
		setUsername(username);
	};

	const handlePasswordChange = (password: string) => {
		if (password.length === 1) {
			setError("");
		}
		setPassword(password);
	};

	const handleFileImage = (event: any) => {
		const image = URL.createObjectURL(event.target.files[0]);
		setAvatar(image);
	};

	return (
		<>
			<PrimaryContainer>
				<SecondContainer>
					<div>
						<h1>Crie seu usuário!</h1>
					</div>
					<div>
						<img src={avatar === "" ? ImageAvatar : avatar} alt="" />
						<input
							id="inputfile"
							type="file"
							value={avatar}
							onChange={(event: any) => handleFileImage(event)}
							accept="image/jpg/png/jpeg"
						/>
						<button onClick={() => document.getElementById("inputfile")?.click()}>Adicionar Avatar</button>
					</div>
					<UContainer>
						<label>{userExist !== "" ? userExist : "Seu usuário"}</label>
						<input
							type="text"
							value={username}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeUsername(event.target.value)}
						/>
					</UContainer>
					<UContainer>
						<label>Sua senha (deve ter 6 caracteres ou mais)</label>
						<input
							type="password"
							value={password}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(event.target.value)}
						/>
					</UContainer>
					<UContainer>
						<label>Seu Nome Completo</label>
						<input
							type="text"
							value={fullName}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFullName(event.target.value)}
						/>
					</UContainer>
					<ContainerButton>
						<button onClick={() => handleSubmit()}>Cadastrar</button>
						<button onClick={() => props.history.push("/")}>Cancelar</button>
					</ContainerButton>
				</SecondContainer>
			</PrimaryContainer>
		</>
	);
}

export default connect(mapStateToProps, (dispatch: any) => ({
	signup: (formdata: { username: string; password: string; fullName: string; avatar: string }) =>
		dispatch(signup(formdata)),
	fetchUsernameList: () => dispatch(fetchUsernameList()),
}))(SignUp);
