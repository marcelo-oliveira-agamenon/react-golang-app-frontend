import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { signIn } from "../../ducks/auth";
import Camera from "../../components/camera/index";
import { styles } from "./styles";
import LogoI from "../../assets/images/logo.png";
import AvatarPlaceholder from "../../assets/images/avatar.png";
import { StackNavigationProp } from "@react-navigation/stack";

interface props {
  navigation: StackNavigationProp<any, string>;
  signIn: (
    username: string,
    password: string,
    fullname: string,
    avatar: string
  ) => Promise<boolean>;
}

function SignIn(props: props) {
  let [email, setEmail] = useState<string>("");
  let [name, setName] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [avatar, setAvatar] = useState<string>("");
  let [loading, setLoading] = useState<boolean>(false);
  let [cameraOpen, setCameraOpen] = useState<boolean>(false);

  let emailRef: string, passwordRef: string, nameRef: string;

  const handleCamera = (uri: string) => {
    setAvatar(uri);
    setCameraOpen(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    props.signIn(email, password, name, avatar);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const onFocus = (type: string, isFocus: boolean) => {
    let obj: any =
      type === "email" ? emailRef : type === "password" ? passwordRef : nameRef;
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

  return cameraOpen ? (
    <View styles={styles.containerCamera}>
      <Camera handleChange={handleCamera} />
    </View>
  ) : (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={LogoI} style={styles.image} />
      </View>
      <View style={styles.containerAvatar}>
        <Image
          style={styles.imageAvatar}
          source={
            avatar === ""
              ? AvatarPlaceholder
              : {
                  uri: avatar,
                }
          }
        />
        <View style={styles.buttonCamera}>
          {avatar === "" ? (
            <TouchableOpacity
              onPress={() => setCameraOpen((setCameraOpen) => !setCameraOpen)}
            >
              <Text style={styles.textLoginA}>Open Camera</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setAvatar("")}>
              <Text style={styles.textLoginA}>Delete Photo</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
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
          ref={(comp) => (nameRef = comp)}
          onFocus={() => onFocus("name", true)}
          onBlur={() => onFocus("name", false)}
          style={styles.emailInput}
          onChangeText={(event) => setName(event)}
          value={name}
          placeholder="USERNAME"
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
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleSubmit}
          disable={loading}
        >
          {loading ? (
            <ActivityIndicator color="#ffffff" size="large" />
          ) : (
            <Text style={styles.textLogin}>Create Account</Text>
          )}
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

export default connect(null, (dispatch: any) => ({
  signIn: (
    username: string,
    password: string,
    fullname: string,
    avatar: string
  ) => dispatch(signIn(username, password, fullname, avatar)),
}))(SignIn);
