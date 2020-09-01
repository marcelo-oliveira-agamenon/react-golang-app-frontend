import React from "react";
import { View, Text, Image } from "react-native";

interface props {
	loggedUser: any;
	logo: any;
	placeholder: any;
	styles: any;
	isCart: boolean;
}

const header: React.FC<props> = ({
	loggedUser,
	logo,
	placeholder,
	styles,
	isCart,
}) => {
	return (
		<>
			{isCart ? null : (
				<View style={styles.headerMain}>
					<Image source={logo} style={styles.headerLogo} />
					<View style={styles.headerView}>
						<Text style={styles.headerText}>
							Welcome, {loggedUser.username}!
						</Text>
						<Image
							source={
								loggedUser.AvatarURL === "" ? placeholder : loggedUser.AvatarURL
							}
							style={styles.headerAvatar}
						/>
					</View>
				</View>
			)}
		</>
	);
};

export default header;
