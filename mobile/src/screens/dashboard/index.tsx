import React from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import Header from "../../components/header/index";
import LogoI from "../../assets/images/logo.png";
import AvatarPlaceholder from "../../assets/images/avatar.png";

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
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
					<Header
						loggedUser={props.loggedUser}
						logo={LogoI}
						placeholder={AvatarPlaceholder}
						styles={styles}
						isCart={false}
					/>
					<View style={styles.main}></View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}

export default connect(mapStateToProps, null)(Dashboard);
