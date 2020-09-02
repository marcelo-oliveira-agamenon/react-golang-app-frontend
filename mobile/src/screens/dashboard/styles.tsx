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
	searchContainer: {
		borderColor: "#5988FF",
		borderWidth: 1,
		borderRadius: 5,
		marginHorizontal: normalize(15),
		paddingVertical: normalize(8),
		paddingHorizontal: normalize(20),
	},
	searchText: {
		color: "#000",
		textTransform: "capitalize",
		fontSize: normalize(14),
		alignSelf: "center",
		marginBottom: responsiveHeight(10, 12, 13, 15),
	},
	searchInput: {
		backgroundColor: "#EFEFEF",
		paddingHorizontal: normalize(20),
		paddingVertical: normalize(9),
		marginBottom: normalize(8),
		borderRadius: 10,
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
