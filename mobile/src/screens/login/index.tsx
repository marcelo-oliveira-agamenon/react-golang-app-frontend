import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { login } from "../../ducks/auth";
import { connect } from "react-redux";
import { styles } from "./styles";
import LogoI from "../../assets/images/logo.png";
import Toast from "../../components/toast/index"
import { StackNavigationProp } from "@react-navigation/stack";

interface props {
  login: (username: string, password: string) => Promise<boolean>;
  navigation: StackNavigationProp<any, string>;
}

function Login(props: props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  let emailRef: string, passwordRef: string;

  const handleSubmit = () => {
    if(email === "" || password === "") {
      Toast({message: "Empty email or password", time: 1500})
      return
    }

    setLoading(true);
    props.login(email, password).then(res => {
      if(res) {
        props.navigation.navigate("Dashboard")       
      } else {
        Toast({message: "Email or password invalid", time: 1500})
      }
      setLoading(false)
    });
  };

  const onFocus = (type: string, isFocus: boolean) => {
    let obj: any = type === "email" ? emailRef : passwordRef;
    if (isFocus) {
      obj.setNativeProps({
        style: styles.onFocusStyle,
      });
    } else {
      obj.setNativeProps({
        style: styles.onBlurStyle,
      });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={LogoI} style={styles.image} />
      </View>
      {/* <KeyboardAvoidingView
        behevior={Platform.select({
          ios: "padding",
          android: null,
        })}
        style={styles.containerKeyboard}
        enabled={true}
      > */}
        <View style={styles.containerInput}>
          <TextInput
            ref={(comp) => (emailRef = comp)}
            onFocus={() => onFocus("email", true)}
            onBlur={() => onFocus("email", false)}
            style={styles.emailInput}
            onChangeText={(event) => setEmail(event)}
            value={email}
            placeholder="EMAIL"
          />
          <TextInput
            ref={(comp) => (passwordRef = comp)}
            onFocus={() => onFocus("password", true)}
            onBlur={() => onFocus("password", false)}
            style={styles.passwordInput}
            secureTextEntry={true}
            password={true}
            onChangeText={(event) => setPassword(event)}
            value={password}
            placeholder="PASSWORD"
          />
        </View>
      {/* </KeyboardAvoidingView> */}
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#ffffff" size="large" />
          ) : (
            <Text style={styles.textLogin}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textSignUp}>Don't have a account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")} disabled={loading}>
          <Text style={styles.textMarked}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default connect(null, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Login);
