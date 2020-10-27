import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Container, Card, InputCont } from "./styles";
import ImageAvatar from "../../assets/avatar/avataaars.png";

interface props extends RouteComponentProps<any> {}

function SignUp(props: props) {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [loading, setLoading] = useState<string>("");

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

          <div>
            <h3>adsassd</h3>
          </div>
        </section>
        <div>
          <button>clique aqui</button>
        </div>
      </Card>
    </Container>
  );
}

export default SignUp;
