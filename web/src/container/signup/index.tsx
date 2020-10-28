import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../ducks/auth";
import { RouteComponentProps } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { Container, Card, InputCont, ImgContainer } from "./styles";
import ImageAvatar from "../../assets/avatar/avataaars.png";

interface props extends RouteComponentProps<any> {
  signup: (form: FormData) => Promise<any>;
}

function SignUp(props: props) {
  const { addToast } = useToasts();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    if (email === "") {
      addToast("Preencha os campos!", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    let form = new FormData();
    form.set("email", email);
    form.set("password", pass);
    form.set("name", name);
    form.set("birthday", date);
    form.set("phone", phone);
    form.set("gender", gender);
    form.set("address", address);
    if (avatar !== "") {
      form.append("avatar", avatar);
    }

    props
      .signup(form)
      .then(() => {
        addToast("sucesso", {
          appearance: "success",
          autoDismiss: true,
        });
        setLoading(false);
      })
      .catch((err) => {
        addToast(err, {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
      });
  };

  const phoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  };

  const handleImage = (event: any) => {
    if (event.target.files.length > 0) {
      let image = URL.createObjectURL(event.target.files[0]);
      setAvatar(image);
    }
  };

  return (
    <Container>
      <Card>
        <section>
          <div>
            <InputCont>
              <label htmlFor="name">nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="password">senha</label>
              <input
                id="password"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="phone">telefone</label>
              <input
                id="phone"
                type="text"
                value={phone}
                maxLength={15}
                onChange={(e) => setPhone(phoneMask(e.target.value))}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="date">data de nascimento</label>
              <input
                id="date"
                min={Date()}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="gender">gênero</label>
              <select id="gender" onChange={(e) => setGender(e.target.value)}>
                <option value=""></option>
                <option value="masc">Masculino</option>
                <option value="fem">Feminino</option>
                <option value="other">Outro</option>
              </select>
            </InputCont>

            <InputCont>
              <label htmlFor="address">endereço</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputCont>
          </div>

          <ImgContainer>
            <section>
              <img src={avatar !== "" ? avatar : ImageAvatar} alt="avatar" />
              <input
                type="file"
                id="fileHandle"
                accept="image/jpg/png/jpeg"
                onChange={(e) => handleImage(e)}
              />
            </section>
            <div>
              <button
                onClick={() => document.getElementById("fileHandle")?.click()}
              >
                adicionar imagem
              </button>
              <button className="remove-btn" onClick={() => setAvatar("")}>
                remover imagem
              </button>
            </div>
          </ImgContainer>
        </section>

        <div className="btn-main">
          <button
            className="remove-btn"
            onClick={() => props.history.push("/prelogin")}
          >
            cancelar
          </button>
          <button disabled={loading} onClick={() => handleSubmit()}>
            {loading ? (
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 16,
                      color: "white",
                    }}
                  />
                }
              />
            ) : (
              "cadastrar"
            )}
          </button>
        </div>
      </Card>
    </Container>
  );
}

export default connect(null, {
  signup,
})(SignUp);
