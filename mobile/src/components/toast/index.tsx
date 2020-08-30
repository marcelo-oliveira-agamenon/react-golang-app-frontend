import React from 'react';
import {ToastAndroid } from 'react-native';

interface props {
    message: string
    time: number
}

const toast: React.FC<props> = ({message, time}) => {
  ToastAndroid.show(message, time)
}

export default toast;