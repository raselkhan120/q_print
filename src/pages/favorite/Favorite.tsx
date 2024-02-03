import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { favoriteStyle } from "./FavoriteStyle";
import FavoriteCart from "../../components/favoriteCartComponents/FavoriteCart";
import { Font } from "../../constants/GlobalStyle";

const logodata = [
  {
    id: 1,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 2,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 3,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 4,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 5,
    img: require("../../../assets/image/adidas.png"),
  },
];

const Favorite = () => {
  return (
    <View style={favoriteStyle.container}>
      {/* header section */}
      <CommonHeader title="My Favorite" />
      {/* body section */}
      <View style={favoriteStyle.bodyContainer}>
        <FlatList
          data={logodata}
          renderItem={({ item }) => {
            return <FavoriteCart item={item} />;
          }}
          ListFooterComponent={
            <TouchableOpacity style={favoriteStyle.footerButton}>
              <Text style={favoriteStyle.footerButtonText}>
                <Text style={{ fontSize: Font.Font_XL }}>+</Text> Add More
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};

export default Favorite;
