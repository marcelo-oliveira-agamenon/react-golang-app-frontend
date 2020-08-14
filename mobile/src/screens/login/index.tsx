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
import { normalize } from "../../util/index";

export interface props {
  login: (username: string, password: string) => Promise<boolean>;
  navigation: any;
}

function Login(props: props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    props.login(email, password);
  };

  return (
    <View style={styles.main}>
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
        <Text style={styles.textSignUp}>Don't have a account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text style={styles.textMarked}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    alignSelf: "center",
    marginTop: normalize(-70),
  },
  containerInput: {
    display: "flex",
    paddingHorizontal: normalize(30),
    marginTop: normalize(-60),
  },
  containerButton: {
    display: "flex",
    paddingHorizontal: normalize(30),
    marginTop: normalize(70),
  },
  containerText: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: normalize(20),
  },
  image: {
    width: normalize(350),
    height: normalize(350),
  },
  emailInput: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(14),
    marginBottom: normalize(17),
    borderRadius: 6,
  },
  passwordInput: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(14),
    borderRadius: 6,
  },
  buttonLogin: {
    backgroundColor: "rgb(89,136,255)",
    justifyContent: "center",
    marginBottom: normalize(17),
    height: normalize(48),
    borderRadius: 5,
  },
  textLogin: {
    fontFamily: "Ubuntu-Regular",
    fontSize: normalize(16),
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },
  textSignUp: {
    fontFamily: "Ubuntu-Regular",
    fontSize: normalize(15),
    letterSpacing: 1,
    color: "#000",
    marginRight: normalize(8),
  },
  textMarked: {
    color: "#312F92",
    letterSpacing: 0,
    fontSize: normalize(15),
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});

export default connect(null, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Login);
