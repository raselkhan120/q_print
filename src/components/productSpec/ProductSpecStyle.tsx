import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const productSpecStyle = StyleSheet.create({
  specBox: {
    backgroundColor: 'rgba(35, 63, 163, 0.08)',
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
    marginTop: 20,
  },
  specTitle: {
    fontSize: Font.Font_X,
    color: Color.C_black,
    fontWeight: "600",
  },
});
