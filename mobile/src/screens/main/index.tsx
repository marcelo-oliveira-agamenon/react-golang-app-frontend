import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LogoI from "../../assets/images/logo.png";
import { styles } from "./styles";

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

export default MainScreen;
