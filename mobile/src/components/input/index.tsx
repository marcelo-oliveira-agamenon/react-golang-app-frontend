import React from 'react';
import { TextInput } from 'react-native';

interface props {
    value: string;
    placeholder: string;
    style: object;
    focusStyle: object;
    blurStyle: object;
    isPassword: boolean;
    onChange: (event) => void;
}

const handleFocus = (ref: any, isFocus: boolean, style: object) => {
    if (isFocus) {
      ref.setNativeProps({
        style: style,
      });
    } else {
      ref.setNativeProps({
        style: style,
      });
    }
  };

const input: React.FC<props> = ({value, placeholder, style, onChange, focusStyle, blurStyle, isPassword}) => {
    let inputRef: any;
  return <TextInput ref={(comp) => (inputRef = comp)} value={value} placeholder={placeholder} style={style} onChangeText={(event) => onChange(event)} onFocus={() => handleFocus(inputRef, true, focusStyle)} onBlur={() => handleFocus(inputRef, false, blurStyle)} secureTextEntry={isPassword} />;
}

export default input;