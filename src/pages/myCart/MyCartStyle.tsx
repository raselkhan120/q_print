import { StyleSheet } from "react-native";
import { Color, Font, shadows } from "../../constants/GlobalStyle";

export const myCartStyle = StyleSheet.create({
  arrowAndTitleCon: {
    height: 70,
    backgroundColor: Color.C_white,
    flexDirection: "row",
    padding: 20,
    borderBottomColor: Color.C_H_black,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: Font.Font_M,
    fontWeight: "600",
    marginLeft: 20,
  },
  totalPriceAndProgressCon: {
    height: 190,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Color.C_white,
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    shadowOffset: {
      width: shadows.offsetWidth_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
    // overflow: "hidden",
    padding: 20,
  },
  grandTotalCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  freeShippingText: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.6)",
    alignSelf: "center",
    marginTop: 10,
  },
  linearContainer: {
    width: "100%",
    height: 50,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  proceedButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  proceedText: {
    fontSize: 18,
    fontWeight: "600",
    color: Color.C_white,
  },
});
