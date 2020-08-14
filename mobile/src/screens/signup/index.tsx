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
import { connect } from "react-redux";
import { signIn } from "../../ducks/auth";
import LogoI from "../../assets/images/logo.png";
import { normalize } from "../../util/index";

export interface props {
  navigation: any;
  signIn: (
    username: string,
    password: string,
    fullname: string,
    avatar: string
  ) => Promise<boolean>;
}

function SignIn(props: props) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    props.signIn(email, password, name, "");
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={LogoI} style={styles.image} />
      </View>
      <View></View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.emailInput}
          onChangeText={(event) => setEmail(event)}
          value={email}
          placeholder="EMAIL"
        />
        <TextInput
          style={styles.emailInput}
          onChangeText={(event) => setName(event)}
          value={name}
          placeholder="USERNAME"
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
          <Text style={styles.textLogin}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textLoginA}>Already have a account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={styles.textMarked}>Login</Text>
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
    marginTop: normalize(-85),
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
    width: normalize(270),
    height: normalize(270),
  },
  emailInput: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(14),
    marginBottom: normalize(12),
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
  textLoginA: {
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
  signIn: (
    username: string,
    password: string,
    fullname: string,
    avatar: string
  ) => dispatch(signIn(username, password, fullname, avatar)),
}))(SignIn);
