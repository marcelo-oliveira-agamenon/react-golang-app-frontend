import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsernameList, signup } from "../../ducks/auth";
import { RouteComponentProps } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { PrimaryContainer, SecondContainer, UContainer, ContainerButton } from "./styles";
import ImageAvatar from "../../assets/avatar/avataaars.png";

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
	const [userExist, setUserExist] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const { addToast } = useToasts();

	useEffect(() => {
		props.fetchUsernameList();
	}, [props]);

	const handleSubmit = () => {
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
					addToast("Algo deu errado! Por favor tente novamente", { appearance: "error" });
					setUsername("");
					setPassword("");
					setFullName("");
					setAvatar("");
				}
				setLoading(false);
			});
		} else {
			addToast("Algo deu errado! Por favor preencha todos os campos", { appearance: "error" });
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

	const handleFileImage = (event: any) => {
		const image: string = URL.createObjectURL(event.target.files[0]);
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
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
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

export default connect(
	(state: { usernameList: {} }) => {
		return {
			usernameList: state.usernameList,
		};
	},
	(dispatch: any) => ({
		signup: (formdata: { username: string; password: string; fullName: string; avatar: string }) =>
			dispatch(signup(formdata)),
		fetchUsernameList: () => dispatch(fetchUsernameList()),
	})
)(SignUp);
