import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");
const isSmallPhone = width <= 360;
const isTablet = width >= 768;

const pick = (small, base, tablet) => {
  if (isTablet) return tablet;
  if (isSmallPhone) return small;
  return base;
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
});
