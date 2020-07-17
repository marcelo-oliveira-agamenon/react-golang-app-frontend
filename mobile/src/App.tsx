import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { login } from "./ducks/auth";

const mapStateToProps = (state: { user: any }) => {
  return {
    user: state.user,
  };
};

export interface props {
  user: any;
  login: (username: string, password: string) => Promise<string>;
}

function App(props: props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    props.login(username, password);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#81ACC8" }}>
      <View
        style={{
          marginTop: 40,
        }}
      >
        <Text style={{ color: "#fff", alignSelf: "center", fontSize: 22 }}>
          Bem Vindo ao meu app
        </Text>
      </View>
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            marginLeft: 80,
            fontSize: 18,
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Usuário
        </Text>
        <TextInput
          style={{
            backgroundColor: "#fff",
            width: 280,
            alignSelf: "center",
            borderRadius: 10,
            padding: 10,
          }}
          value={username}
          onChangeText={(text: string) => setUsername(text)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            marginLeft: 80,
            fontSize: 18,
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Senha
        </Text>
        <TextInput
          style={{
            backgroundColor: "#fff",
            width: 280,
            alignSelf: "center",
            borderRadius: 10,
            padding: 10,
          }}
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#3DC895",
          marginTop: 85,
          width: 250,
          alignSelf: "center",
          padding: 8,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#3C9876",
        }}
        onPress={() => handleSubmit()}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            letterSpacing: 2,
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default connect(mapStateToProps, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(App);
