import { StyleSheet } from "react-native";
import { normalize, SCREEN_HEIGHT } from "../../util/index";

export const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    alignSelf: "center",
    marginTop:
      SCREEN_HEIGHT > 1200
        ? -60
        : SCREEN_HEIGHT > 1000
        ? -70
        : SCREEN_HEIGHT > 800
        ? -80
        : -130,
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
    marginTop:
      SCREEN_HEIGHT > 1200
        ? 210
        : SCREEN_HEIGHT > 1000
        ? 200
        : SCREEN_HEIGHT > 800
        ? 180
        : 140,
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
