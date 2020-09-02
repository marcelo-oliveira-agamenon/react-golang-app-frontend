import React, { useState } from "react";
import { connect } from "react-redux";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {} from "react-native-vector-icons";

import Header from "../../components/header/index";
import Input from "../../components/input/index";
import LogoI from "../../assets/images/logo.png";
import AvatarPlaceholder from "../../assets/images/avatar.png";

import { styles } from "./styles";

interface props {
	loggedUser: object;
	navigation: StackNavigationProp<any, string>;
}

function Dashboard(props: props) {
	let [search, setSearch] = useState<string>("");
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
					<View style={styles.main}>
						<View style={styles.searchContainer}>
							<Text style={styles.searchText}>find your products here!</Text>
							<Input
								value={search}
								keyboardView={() => null}
								onChange={(event) => setSearch(event)}
								isPassword={false}
								style={styles.searchInput}
								placeholder="SEARCH"
								focusStyle={styles.onFocusStyle}
								blurStyle={styles.onBlurStyle}
							/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}

export default connect((state: { loggedUser: object }) => {
	return {
		loggedUser: state.loggedUser,
	};
}, null)(Dashboard);
