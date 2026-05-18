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
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: COLORS.backgroundHero,
    paddingTop: pick(10, 15, 22),
    paddingHorizontal: pick(16, 24, 34),
    paddingBottom: pick(58, 76, 94),
    borderBottomLeftRadius: pick(22, 30, 36),
    borderBottomRightRadius: pick(22, 30, 36),
    overflow: "hidden",
  },
  topStatus: {
    color: COLORS.textLight,
    fontSize: 12,
    marginBottom: 28,
    fontWeight: "600",
  },
  title: {
    color: COLORS.buttonText,
    fontSize: pick(34, 42, 54),
    fontWeight: "800",
    lineHeight: pick(38, 46, 58),
    marginVertical: 8,
  },
  subtitle: {
    color: COLORS.textSubtitle,
    fontSize: pick(15, 17, 22),
    fontWeight: "500",
  },
  topLink: {
    color: COLORS.textLink,
    fontSize: 14,
    marginVertical: 22,
    marginBottom: 22,
    fontWeight: "500",
  },
  card: {
    flex: 1,
    marginTop: pick(-24, -34, -44),
    backgroundColor: COLORS.cardBg,
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
    color: COLORS.backgroundHero,
    fontWeight: "800",
    marginBottom: pick(20, 32, 40),
    marginTop: pick(8, 12, 16),
  },
  inputContainer: {
    position: "relative",
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
    top: 10,
    padding: 4,
  },
  showPasswordText: {
    color: COLORS.inputPlaceholder,
    fontSize: 12,
    fontWeight: "500",
  },
  input: {
    backgroundColor: COLORS.inputBg,
    borderRadius: pick(14, 16, 18),
    paddingHorizontal: pick(14, 16, 20),
    height: pick(42, 44, 52),
    color: COLORS.textDark,
    marginBottom: pick(10, 12, 16),
  },
  button: {
    marginTop: 8,
    height: pick(44, 46, 54),
    backgroundColor: COLORS.buttonBg,
    borderRadius: pick(20, 22, 27),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.buttonText,
    fontWeight: "700",
    fontSize: pick(16, 17, 20),
  },
   buttonDisabled: {
    opacity: 0.7,
  },
  forgot: {
    alignSelf: "flex-end",
    color: COLORS.forgotText,
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
    backgroundColor: COLORS.divider,
  },
  orText: {
    marginHorizontal: 10,
    color: COLORS.orText,
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
    backgroundColor: COLORS.socialBg,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.socialBorder,
  },
  socialText: {
    color: COLORS.socialText,
    fontSize: 16,
    fontWeight: "700",
  },
  footerText: {
    textAlign: "center",
    color: COLORS.footerText,
    fontSize: 13,
  },
  footerLink: {
    color: COLORS.footerLink,
    fontWeight: "700",
  },
  pendingText: {
    color: COLORS.textLight,
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
  },
});
