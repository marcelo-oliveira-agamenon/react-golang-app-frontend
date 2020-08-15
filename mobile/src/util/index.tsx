import { Dimensions, Platform, PixelRatio } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  "window"
);

const scaleWidth = SCREEN_WIDTH / 320;
const scaleHeight = SCREEN_HEIGHT / 480;

export function normalize(size) {
  const newSize = size * scaleWidth;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
