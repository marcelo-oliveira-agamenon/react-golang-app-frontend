import React, { useState } from "react";
import {
	View,
	Image,
	TouchableOpacity,
	Text,
	ActivityIndicator,
	KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import { signIn } from "../../ducks/auth";
import Camera from "../../components/camera/index";
import { styles } from "./styles";
import LogoI from "../../assets/images/logo.png";
import AvatarPlaceholder from "../../assets/images/avatar.png";
import { StackNavigationProp } from "@react-navigation/stack";
import Toast from "../../components/toast/index";
import Input from "../../components/input/index";

interface props {
	navigation: StackNavigationProp<any, string>;
	signIn: (
		username: string,
		password: string,
		fullname: string,
		avatar: string
	) => Promise<boolean>;
}

function SignIn(props: props) {
	let [email, setEmail] = useState<string>("");
	let [name, setName] = useState<string>("");
	let [password, setPassword] = useState<string>("");
	let [avatar, setAvatar] = useState<string>("");
	let [enabled, setEnabled] = useState<boolean>(false);
	let [loading, setLoading] = useState<boolean>(false);
	let [cameraOpen, setCameraOpen] = useState<boolean>(false);

	const handleCamera = (uri: string) => {
		setAvatar(uri);
		setCameraOpen(false);
	};

	const handleSubmit = () => {
		if (email === "" || name === "" || password === "" || avatar === "") {
			Toast({ message: "Please fill all the fields", time: 1500 });
			return;
		}

		setLoading(true);
		props.signIn(email, password, name, avatar).then((res) => {
			if (res) {
				props.navigation.navigate("Login");
			} else {
				Toast({ message: "Error creating user", time: 1500 });
			}
			setLoading(false);
		});
	};

	return cameraOpen ? (
		<View style={styles.containerCamera}>
			<Camera handleChange={handleCamera} />
		</View>
	) : (
		<View style={styles.main}>
			<KeyboardAvoidingView behavior={"position"} enabled={enabled}>
				<View>
					<View style={styles.container}>
						<Image source={LogoI} style={styles.image} />
					</View>
					<View style={styles.containerAvatar}>
						<Image
							style={styles.imageAvatar}
							source={
								avatar === ""
									? AvatarPlaceholder
									: {
											uri: avatar,
									  }
							}
						/>
						<View style={styles.buttonCamera}>
							{avatar === "" ? (
								<TouchableOpacity
									onPress={() =>
										setCameraOpen((setCameraOpen) => !setCameraOpen)
									}
								>
									<Text style={styles.textLoginA}>Open Camera</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity onPress={() => setAvatar("")}>
									<Text style={styles.textLoginA}>Delete Photo</Text>
								</TouchableOpacity>
							)}
						</View>
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
							value={name}
							placeholder={"USERNAME"}
							onChange={(event) => setName(event)}
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
								<Text style={styles.textLogin}>Create Account</Text>
							)}
						</TouchableOpacity>
					</View>
					<View style={styles.containerText}>
						<Text style={styles.textLoginA}>Already have a account?</Text>
						<TouchableOpacity
							onPress={() => props.navigation.navigate("Login")}
							disabled={loading}
						>
							<Text style={styles.textMarked}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}

export default connect(null, (dispatch: any) => ({
	signIn: (
		username: string,
		password: string,
		fullname: string,
		avatar: string
	) => dispatch(signIn(username, password, fullname, avatar)),
}))(SignIn);
