import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import LogoI from "../../assets/images/logo.png";

function Login() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={LogoI} style={styles.image} />
      </View>
      <View>
        <TextInput onChangeText={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
    marginTop: -30,
  },
  image: {
    width: 420,
    height: 420,
  },
});

export default Login;
