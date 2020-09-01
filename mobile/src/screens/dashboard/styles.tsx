import { StyleSheet } from "react-native";
import { normalize, responsiveHeight } from "../../util/index";

export const styles = StyleSheet.create({
	main: {
		backgroundColor: "#fff",
		flex: 1,
	},
	headerMain: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#fff",
		justifyContent: "space-around",
		paddingVertical: normalize(12),
	},
	headerLogo: {
		width: normalize(70),
		height: normalize(70),
	},
	headerView: {
		display: "flex",
		flexDirection: "row",
	},
	headerAvatar: {
		width: normalize(60),
		height: normalize(60),
		borderRadius: normalize(20),
	},
	headerText: {
		alignSelf: "center",
		fontFamily: "Ubuntu-Regular",
		fontSize: normalize(13),
		color: "#000",
		fontWeight: "600",
		marginRight: responsiveHeight(10, 15, 16, 18),
	},
});
