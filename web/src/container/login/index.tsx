import React, { useState } from "react";
import { login } from "../../ducks/auth";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { MainContainer, SecondContainer, InputContainer, EnterContainer } from "./styles";
import { Loader } from "../../components/index";

export interface props extends RouteComponentProps<any> {
	login: (username: string, password: string) => Promise<void>;
}

function Login(props: props) {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	function handleSubmit() {
		if (username === "" || password === "") {
			return;
		}
		setLoading(true);
		props.login(username, password).then((response) => {
			if (response !== undefined) {
				setLoading(false);
				setUsername("");
				setPassword("");
				props.history.push("/dashboard");
			}
		});
	}

	function handleSignUpClick() {
		props.history.push("/signup");
	}

	function handleKeyPress(key: string) {
		if (key === "Enter") {
			handleSubmit();
		}
	}

	return (
		<>
			<MainContainer>
				<SecondContainer>
					<h1>Bem vindo a nossa Plataforma!</h1>
					<div>
						<div>
							<InputContainer>
								<label>Usuário</label>
								<input
									type="text"
									value={username}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
								/>
							</InputContainer>
						</div>
						<div>
							<InputContainer>
								<label>Senha</label>
								<input
									type="password"
									value={password}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
									onKeyPress={(event) => handleKeyPress(event.key)}
								/>
							</InputContainer>
						</div>
						<EnterContainer>
							<button onClick={() => handleSubmit()}>
								{loading ? (
									<h1>
										<Loader color="white" height={22} width={22} />
									</h1>
								) : (
									"Entrar"
								)}
							</button>
						</EnterContainer>
						<EnterContainer>
							<h4 onClick={() => handleSignUpClick()}>Não cadastrado? Crie sua conta aqui</h4>
						</EnterContainer>
					</div>
				</SecondContainer>
			</MainContainer>
		</>
	);
}

export default connect(null, (dispatch: any) => ({
	login: (username: string, password: string) => dispatch(login(username, password)),
}))(Login);
