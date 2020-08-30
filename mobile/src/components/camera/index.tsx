import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import Permissions from "react-native-permissions";
import Icon from "react-native-vector-icons/AntDesign";
import { SCREEN_HEIGHT, normalize } from "../../util/index";

interface props {
  handleChange: (uri: string) => void;
}

const camera: React.FC<props> = ({handleChange}) => {
  let camRef = useRef(null);
  let [_, setPermission] = useState<string>("undetermined");

  const handlePermission = () => {
    Permissions.check("android.permission.CAMERA").then((resp) => {
      setPermission(resp);
    });
  };

  const takePicture = async function (camera: any, close?: boolean) {
    if (close && close === true) {
      handleChange("");
    } else {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      handleChange(data.uri);
    }
  };

  return (
    <TouchableOpacity onPress={() => handlePermission()}>
      <RNCamera
        ref={camRef}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.auto}
        style={styles.camera}
      >
        {({ camera }) => {
          return (
            <>
              <View style={styles.closeContainer}>
                <TouchableOpacity onPress={() => takePicture(camera, true)}>
                  <Icon name="close" size={40} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={styles.containerShot}>
                <TouchableOpacity onPress={() => takePicture(camera, false)}>
                  <Icon name="camera" size={50} color="#000" />
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </RNCamera>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerShot: {
    marginTop: SCREEN_HEIGHT - 150,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 35,
    padding: normalize(8),
  },
  closeContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: normalize(8),
    paddingTop: normalize(8),
  },
  camera: {
    height: SCREEN_HEIGHT,
  },
});

export default camera;
