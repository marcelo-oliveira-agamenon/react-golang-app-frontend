import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { login } from "../../ducks/auth";
import { connect } from "react-redux";
import LogoI from "../../assets/images/logo.png";

export interface props {
  login: (username: string, password: string) => any;
}

function Login(props: props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    props.login(email, password).then(() => {
      setLoading(false);
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <Image source={LogoI} style={styles.image} />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.emailInput}
          onChangeText={(event) => setEmail(event)}
          value={email}
          placeholder="EMAIL"
        />
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={true}
          password={true}
          onChangeText={(event) => setPassword(event)}
          value={password}
          placeholder="PASSWORD"
        />
      </View>
      {loading ? <ActivityIndicator /> : null}
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textSignUp}>
          Don't have a account? <Text style={styles.textMarked}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
    marginTop: -80,
  },
  containerInput: {
    display: "flex",
    paddingHorizontal: 35,
    marginTop: -20,
  },
  containerButton: {
    display: "flex",
    paddingHorizontal: 35,
    marginTop: 120,
  },
  containerText: {
    display: "flex",
    alignSelf: "center",
    marginTop: 70,
  },
  image: {
    width: 420,
    height: 420,
  },
  emailInput: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 28,
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 6,
  },
  passwordInput: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 28,
    paddingVertical: 15,
    borderRadius: 6,
  },
  buttonLogin: {
    backgroundColor: "rgb(89,136,255)",
    justifyContent: "center",
    marginBottom: 20,
    height: 60,
    borderRadius: 5,
  },
  textLogin: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },
  textSignUp: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 18,
    letterSpacing: 1,
    color: "#000",
  },
  textMarked: {
    color: "#312F92",
    letterSpacing: 0,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});

export default connect(null, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Login);
