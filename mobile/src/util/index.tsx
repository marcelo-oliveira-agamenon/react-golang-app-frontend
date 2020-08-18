import { Dimensions, Platform, PixelRatio } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  "window"
);

const scaleWidth = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scaleWidth;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function responsiveHeight(
  s1: number,
  s2: number,
  s3: number,
  s4: number
) {
  const size =
    SCREEN_HEIGHT > 1200
      ? s1
      : SCREEN_HEIGHT > 1000
      ? s2
      : SCREEN_HEIGHT > 800
      ? s3
      : s4;
  return size;
}
