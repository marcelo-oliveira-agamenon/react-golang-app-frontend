import React, { useState } from "react";
import {
	View,
	Image,
	TouchableOpacity,
	Text,
	ActivityIndicator,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { login } from "../../ducks/auth";
import { connect } from "react-redux";
import { styles } from "./styles";
import LogoI from "../../assets/images/logo.png";
import Toast from "../../components/toast/index";
import Input from "../../components/input/index";
import { StackNavigationProp } from "@react-navigation/stack";

interface props {
	login: (username: string, password: string) => Promise<boolean>;
	navigation: StackNavigationProp<any, string>;
}

function Login(props: props) {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [enabled, setEnabled] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = () => {
		if (email === "" || password === "") {
			Toast({ message: "Empty email or password", time: 1500 });
			return;
		}

		setLoading(true);
		props.login(email, password).then((res) => {
			if (res) {
				props.navigation.navigate("Dashboard");
			} else {
				Toast({ message: "Email or password invalid", time: 1500 });
			}
			setLoading(false);
		});
	};

	return (
		<View style={styles.main}>
			<KeyboardAvoidingView behavior={"position"} enabled={enabled}>
				<View>
					<View style={styles.container}>
						<Image source={LogoI} style={styles.image} />
					</View>
					<View style={styles.containerInput}>
						<Input
							value={email}
							placeholder={"EMAIL"}
							onChange={(event) => setEmail(event)}
							keyboardView={() => setEnabled((enabled) => !enabled)}
							style={styles.emailInput}
							isPassword={false}
							focusStyle={styles.onFocusStyle}
							blurStyle={styles.onBlurStyle}
						/>
						<Input
							value={password}
							placeholder={"PASSWORD"}
							onChange={(event) => setPassword(event)}
							keyboardView={() => setEnabled((enabled) => !enabled)}
							style={styles.passwordInput}
							isPassword={true}
							focusStyle={styles.onFocusStyle}
							blurStyle={styles.onBlurStyle}
						/>
					</View>
					<View style={styles.containerButton}>
						<TouchableOpacity
							style={styles.buttonLogin}
							onPress={handleSubmit}
							disabled={loading}
						>
							{loading ? (
								<ActivityIndicator color="#ffffff" size="large" />
							) : (
								<Text style={styles.textLogin}>Login</Text>
							)}
						</TouchableOpacity>
					</View>
					<View style={styles.containerText}>
						<Text style={styles.textSignUp}>Don't have a account?</Text>
						<TouchableOpacity
							onPress={() => props.navigation.navigate("Signup")}
							disabled={loading}
						>
							<Text style={styles.textMarked}>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}

export default connect(null, (dispatch: any) => ({
	login: (username: string, password: string) =>
		dispatch(login(username, password)),
}))(Login);
