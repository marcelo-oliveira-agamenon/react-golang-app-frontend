import { StyleSheet } from "react-native";
import { normalize, responsiveHeight } from "../../util/index";

export const styles = StyleSheet.create({
	main: {
		display: "flex",
		flex: 1,
		backgroundColor: "#ffffff",
	},
	container: {
		display: "flex",
		alignSelf: "center",
		marginTop: responsiveHeight(-40, -60, -70, -110),
	},
	containerCamera: {
		backgroundColor: "#ffffff",
	},
	containerAvatar: {
		display: "flex",
		flexDirection: "row",
		alignSelf: "center",
		marginTop: responsiveHeight(-40, -70, -90, -110),
		marginBottom: responsiveHeight(150, 130, 120, 110),
	},
	buttonCamera: {
		display: "flex",
		alignSelf: "center",
		justifyContent: "center",
	},
	containerInput: {
		display: "flex",
		paddingHorizontal: normalize(30),
		marginTop: responsiveHeight(-40, -60, -70, -85),
	},
	containerButton: {
		display: "flex",
		paddingHorizontal: normalize(30),
		marginTop: responsiveHeight(95, 85, 65, 35),
	},
	containerText: {
		display: "flex",
		alignSelf: "center",
		flexDirection: "row",
	},
	imageAvatar: {
		width: normalize(85),
		height: normalize(85),
		marginRight: normalize(25),
		borderRadius: 55,
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
		marginBottom: responsiveHeight(75, 60, 45, 25),
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
