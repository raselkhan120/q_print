import { StyleSheet } from "react-native";
import { Color, Font, shadows } from "../../constants/GlobalStyle";

export const homePageStyle = StyleSheet.create({
  bodyContainer: {},
  // search and threeline containre
  searchAndthreelineCon: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    shadowOffset: {
      width: shadows.offsetWidth_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
    flex: 1,
    backgroundColor: Color.C_white,
    marginVertical: 20,
  },
  threeLine: {
    width: 45,
    height: 45,
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    shadowOffset: {
      width: shadows.offsetWidth_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    backgroundColor: Color.C_white,
    borderRadius: 8,
  },
  searchText: {
    color: Color.C_H_black,
    fontSize: Font.Font_M,
    marginLeft: 5,
  },
});
