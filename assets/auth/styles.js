import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const isSmallPhone = width <= 360;
const isTablet = width >= 768;

const pick = (small, base, tablet) => {
  if (isTablet) return tablet;
  if (isSmallPhone) return small;
  return base;
};

const colors = {
  backgroundLight: "#fcd1c0",
  backgroundHero: "#ed807f",
  textLight: "#e8f5f4",
  textSubtitle: "#d9f4f0",
  textLink: "#d9f4f0",
  textDark: "#144848",
  inputBg: "#eceff0",
  cardBg: "#f6f7f7",
  buttonBg: "#ed807f",
  buttonText: "#ffffff",
  forgotText: "#ed807f",
  divider: "#d5d9d9",
  orText: "#91a0a0",
  socialBg: "#ffffff",
  socialBorder: "#e6e8e8",
  socialText: "#ed807f",
  footerText: "#6b7f7f",
  footerLink: "#ed807f",
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: colors.backgroundHero,
    paddingTop: pick(10, 15, 22),
    paddingHorizontal: pick(16, 24, 34),
    paddingBottom: pick(58, 76, 94),
    borderBottomLeftRadius: pick(22, 30, 36),
    borderBottomRightRadius: pick(22, 30, 36),
    overflow: "hidden",
  },
  topStatus: {
    color: colors.textLight,
    fontSize: 12,
    marginBottom: 28,
    fontWeight: "600",
  },
  title: {
    color: colors.buttonText,
    fontSize: pick(34, 42, 54),
    fontWeight: "800",
    lineHeight: pick(38, 46, 58),
    marginVertical: 8,
  },
  subtitle: {
    color: colors.textSubtitle,
    fontSize: pick(15, 17, 22),
    fontWeight: "500",
  },
  topLink: {
    color: colors.textLink,
    fontSize: 14,
    marginVertical: 22,
    marginBottom: 22,
    fontWeight: "500",
  },
  heroPlant: {
    width: 112,
    height: 112,
    position: "absolute",
    right: 22,
    bottom: 14,
    borderRadius: 56,
    backgroundColor: colors.backgroundHero,
  },
  card: {
    flex: 1,
    marginTop: pick(-24, -34, -44),
    backgroundColor: colors.cardBg,
    borderTopLeftRadius: pick(22, 30, 36),
    borderTopRightRadius: pick(22, 30, 36),
    paddingHorizontal: pick(14, 18, 28),
    paddingTop: pick(16, 22, 32),
    paddingBottom: pick(24, 34, 42),
  },
  cardLogo: {
    width: pick(92, 120, 146),
    height: pick(92, 120, 146),
    position: "absolute",
    top: pick(-38, -50, -60),
    right: pick(8, 16, 22),
    borderRadius: pick(46, 60, 73),
  },
  formTitle: {
    fontSize: pick(28, 32, 40),
    color: colors.backgroundHero,
    fontWeight: "800",
    marginBottom: pick(20, 32, 40),
    marginTop: pick(8, 12, 16),
  },
  input: {
    backgroundColor: colors.inputBg,
    borderRadius: pick(14, 16, 18),
    paddingHorizontal: pick(14, 16, 20),
    height: pick(42, 44, 52),
    color: colors.textDark,
    marginBottom: pick(10, 12, 16),
  },
  button: {
    marginTop: 8,
    height: pick(44, 46, 54),
    backgroundColor: colors.buttonBg,
    borderRadius: pick(20, 22, 27),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.buttonText,
    fontWeight: "700",
    fontSize: pick(16, 17, 20),
  },
  forgot: {
    alignSelf: "flex-end",
    color: colors.forgotText,
    marginBottom: 14,
    fontSize: 13,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 14,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.divider,
  },
  orText: {
    marginHorizontal: 10,
    color: colors.orText,
    fontSize: 12,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 20,
  },
  socialButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: colors.socialBg,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.socialBorder,
  },
  socialText: {
    color: colors.socialText,
    fontSize: 16,
    fontWeight: "700",
  },
  footerText: {
    textAlign: "center",
    color: colors.footerText,
    fontSize: 13,
  },
  footerLink: {
    color: colors.footerLink,
    fontWeight: "700",
  },
});
