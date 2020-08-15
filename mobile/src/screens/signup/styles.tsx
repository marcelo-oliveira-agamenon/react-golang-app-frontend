import { StyleSheet } from "react-native";
import { normalize, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util/index";

export const styles = StyleSheet.create({
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
  containerCamera: {
    backgroundColor: "#ffffff",
  },
  containerAvatar: {
    display: "flex",
    backgroundColor: "#000",
    flexDirection: "row",
    marginTop: normalize(-70),
    marginBottom: normalize(30),
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
  imageAvatar: {
    width: normalize(80),
    height: normalize(80),
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
  onFocusStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  onBlurStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
