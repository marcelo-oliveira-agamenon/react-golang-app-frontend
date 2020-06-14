import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsernameList, signup } from "../../ducks/auth";
import {
  ContainerInput,
  Button,
  InputFile,
  ImageAvatar,
  PrimaryContainer,
  SecondContainer,
  HeaderContainer,
  HeaderTitle,
  UContainer,
  ULabel,
  UInput,
  ContainerButton,
  ButtonCancel,
  ContainerError,
  ErrorTitle,
} from "./styles";

const mapStateToProps = (state: { usernameList: {} }) => {
  return {
    usernameList: state.usernameList,
  };
};

export interface props {
  usernameList: any;
  fetchUsernameList: () => void;
  signup: (formData: {
    username: string;
    password: string;
    fullName: string;
    avatar: string;
  }) => Promise<any>;
}

function SignUp(props: props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [userExist, setUserExist] = useState("");
  const history = useHistory();

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

    if (
      fullName.length === 0 &&
      username.length !== 0 &&
      password.length !== 0
    ) {
      setError("Preencha seu Nome completo!");
      setFullName("");
    }

    if (
      username !== "" ||
      password !== "" ||
      password.length >= 6 ||
      fullName !== ""
    ) {
      let formdata: {
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

      props.signup(formdata).then((response) => {
        if (response === "New user add in database") {
          history.push("/");
        } else {
          setError("Algo deu errado! Por favor tente novamente");
          setUsername("");
          setPassword("");
          setFullName("");
          setAvatar("");
        }
      });
    } else {
      setError("Verifique os campos!");
    }
    return;
  };

  const handleChangeUsername = (username: string) => {
    const { usernameList } = props;
    let isEqual = 0;
    usernameList.map((user: any) => {
      if (user.username === username) {
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

  return (
    <>
      <PrimaryContainer>
        <SecondContainer>
          <HeaderContainer>
            <HeaderTitle>Crie seu usuário!</HeaderTitle>
          </HeaderContainer>
          <ContainerInput>
            <InputFile
              type="file"
              value={avatar}
              onChange={(event) => setAvatar(event.target.value)}
            />
            <Button>Adicionar Avatar</Button>
            {avatar !== "" ? <ImageAvatar src={avatar} /> : null}
          </ContainerInput>
          <UContainer>
            <ULabel>{userExist !== "" ? userExist : "Seu usuário"}</ULabel>
            <UInput
              type="text"
              value={username}
              onChange={(event) => handleChangeUsername(event.target.value)}
            />
          </UContainer>
          <UContainer>
            <ULabel>Sua senha (deve ter 6 caracteres ou mais)</ULabel>
            <UInput
              type="password"
              value={password}
              onChange={(event) => handlePasswordChange(event.target.value)}
            />
          </UContainer>
          <UContainer>
            <ULabel>Seu Nome Completo</ULabel>
            <UInput
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </UContainer>
          <ContainerButton>
            <Button onClick={() => handleSubmit()}>Cadastrar</Button>
            <ButtonCancel onClick={() => history.push("/")}>
              Cancelar
            </ButtonCancel>
          </ContainerButton>
          {error !== "" ? (
            <ContainerError>
              <ErrorTitle>{error}</ErrorTitle>
            </ContainerError>
          ) : null}
        </SecondContainer>
      </PrimaryContainer>
    </>
  );
}

export default connect(mapStateToProps, (dispatch: any) => ({
  signup: (formdata: {
    username: string;
    password: string;
    fullName: string;
    avatar: string;
  }) => dispatch(signup(formdata)),
  fetchUsernameList: () => dispatch(fetchUsernameList()),
}))(SignUp);
