import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import LogoI from "../../assets/images/logo.png";
import { normalize } from "../../util/index";

interface props {
  navigation: any;
}

function MainScreen(props: props) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={LogoI} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Discover the pleasure of buying with us</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => props.navigation.navigate("Signup")}
        >
          <Text style={styles.textSignUp}>Sign Up</Text>
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
    marginTop: normalize(-90),
  },
  image: {
    width: normalize(390),
    height: normalize(390),
  },
  text: {
    fontFamily: "Ubuntu-Regular",
    textAlign: "center",
    color: "#000",
    fontSize: normalize(20),
    width: normalize(260),
  },
  containerButton: {
    display: "flex",
    alignSelf: "center",
    marginTop: normalize(100),
    width: normalize(270),
  },
  buttonLogin: {
    backgroundColor: "rgb(89,136,255)",
    justifyContent: "center",
    marginBottom: normalize(17),
    height: normalize(50),
    borderRadius: 5,
  },
  buttonSignUp: {
    backgroundColor: "#fff",
    justifyContent: "center",
    height: normalize(50),
    borderColor: "#5988FF",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
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
    fontSize: normalize(16),
    textAlign: "center",
    color: "#5988FF",
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default MainScreen;
