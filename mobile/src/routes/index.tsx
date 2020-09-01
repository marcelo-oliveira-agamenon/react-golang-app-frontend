import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../screens/main/index";
import LoginScreen from "../screens/login/index";
import SignupScreen from "../screens/signup/index";
import DashboardScreen from "../screens/dashboard/index";

const Stack = createStackNavigator();

const mapStateToProps = (state: { loggedUser: object }) => {
	return {
		loggedUser: state.loggedUser,
	};
};

interface props {
	loggedUser: any;
}

function Routes(props: props) {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{props.loggedUser?.userID !== undefined ? (
					<Stack.Screen name="Dashboard" component={DashboardScreen} />
				) : (
					<>
						<Stack.Screen name="Main" component={MainScreen} />
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Signup" component={SignupScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default connect(mapStateToProps, null)(Routes);
