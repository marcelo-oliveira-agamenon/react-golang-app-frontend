import React from "react";
import { TextInput } from "react-native";

interface props {
	value: string;
	placeholder: string;
	style: object;
	focusStyle: object;
	blurStyle: object;
	isPassword: boolean;
	onChange: (event) => void;
	keyboardView?: () => void;
}

const handleFocus = (
	ref: any,
	isFocus: boolean,
	style: object,
	keyboardView: () => void
) => {
	if (isFocus) {
		ref.setNativeProps({
			style: style,
		});
		keyboardView();
	} else {
		ref.setNativeProps({
			style: style,
		});
		keyboardView();
	}
};

const input: React.FC<props> = ({
	value,
	placeholder,
	style,
	onChange,
	keyboardView,
	focusStyle,
	blurStyle,
	isPassword,
}) => {
	let inputRef: any;
	return (
		<TextInput
			ref={(comp) => (inputRef = comp)}
			value={value}
			placeholder={placeholder}
			style={style}
			onChangeText={(event) => onChange(event)}
			onFocus={() => handleFocus(inputRef, true, focusStyle, keyboardView)}
			onBlur={() => handleFocus(inputRef, false, blurStyle, keyboardView)}
			secureTextEntry={isPassword}
		/>
	);
};

export default input;
