import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import LogoI from "../../assets/images/logo.png";

function MainScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={LogoI} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Discover the pleasure of buying with us</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
  },
  image: {
    width: 420,
    height: 420,
  },
  text: {
    fontFamily: "Ubuntu-Regular",
    textAlign: "center",
    color: "#000",
    fontSize: 25,
    width: 250,
    marginTop: -65,
  },
  containerButton: {
    display: "flex",
    alignSelf: "center",
    marginTop: 150,
    width: 320,
  },
  buttonLogin: {
    backgroundColor: "rgb(89,136,255)",
    justifyContent: "center",
    marginBottom: 20,
    height: 60,
    borderRadius: 5,
  },
  buttonSignUp: {
    backgroundColor: "#fff",
    justifyContent: "center",
    height: 60,
    borderColor: "#5988FF",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
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
    textAlign: "center",
    color: "#5988FF",
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default MainScreen;
