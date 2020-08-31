import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { styles } from "./styles";

const mapStateToProps = (state: { loggedUser: object }) => {
	return {
		loggedUser: state.loggedUser,
	};
};

interface props {
	loggedUser: object;
	navigation: StackNavigationProp<any, string>;
}

function Dashboard(props: props) {
	return (
		<>
			<View style={styles.main}>
				<Text>sdadas</Text>
			</View>
		</>
	);
}

export default connect(mapStateToProps, null)(Dashboard);
