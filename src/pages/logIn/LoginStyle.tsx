import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.C_white,
  },
  gradientContainer: {
    width: "100%",
  },
  gradientImg: {
    width: "100%",
    position: "absolute",
  },
  LogoContainer: {
    marginTop: 130,
    alignSelf: "center",
  },

  inputContainer: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: Color.C_white,
    shadowColor: Color.C_shadow,
    elevation: 15,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 60,
    alignItems: "center",
  },
  login: {
    fontSize: Font.Font_XXL,
    fontWeight: "600",
    marginBottom: 10,
    color: Color.C_main,
  },
  dummy: {
    fontSize: Font.Font_L,
    color: Color.C_H_black,
  },
  inputAndLabelCon: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: Font.Font_L,
    color: Color.C_H_black,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 6,
    padding: 10,
    height: 45,
    fontSize: Font.Font_L,
  },
  inputPasswordCon: {
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Color.C_border,
    height: 45,
    padding: 10,
  },
  inputPassword: {
    flex: 1,
    fontSize: Font.Font_L,
  },
  eye: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  rememberAndForgotTextCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  checkMarkAndRememberText: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    color: "rgba(0,0,0,0.7)",
    fontSize: Font.Font_M,
    marginLeft: 10,
  },
  forgotText: {
    color: Color.C_main,
    textDecorationLine: "underline",
  },
  loginButtonCon: {
    width: "90%",
    alignSelf: "center",
    height: 50,
    marginTop: 60,
    borderRadius: 6,
  },
  actionLayer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: Font.Font_X,
    fontWeight: "600",
    color: Color.C_white,
  },
  signupText: {
    fontSize: Font.Font_M,
    color: "rgba(0,0,0,0.7)",
    marginTop: 30,
  },

  modalContent: {
    height: 400,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Color.C_white,

    paddingHorizontal: 20,
  },
  modalIndicator: {
    width: 120,
    height: 5,
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: 10,
  },
  forgotTextInModal: {
    fontSize: Font.Font_XL,
    fontWeight: "600",
    marginVertical: 20,
  },
  dummyText: {
    fontSize: Font.Font_M,
    color: "rgba(0,0,0,0.6)",
    lineHeight: 22,
  },
  inputAndLabeCon: {
    marginVertical: 40,
  },
  continueButton: {
    height: 50,
    borderRadius: 25,
  },
});
