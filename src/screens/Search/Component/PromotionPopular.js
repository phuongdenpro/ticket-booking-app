import React from "react";
import {
    Dimensions, Image, Text, TouchableOpacity, View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
const win = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const PromotionPopular= () => {
    const data = [
      {
        price: 150,
        name: "Stabuck Coffee",
        image: require("../../../../assets/logo.png"),
      },
      {
        price: 120,
        name: "Black Coffee",
        image: require("../../../../assets/logo.png"),
      },
      {
        price: 130,
        name: "Black Coffee",
        image: require("../../../../assets/logo.png"),
      },
      {
        price: 140,
        name: "Black Coffee",
        image: require("../../../../assets/logo.png"),
      },
    ];
    return (
      <View>
        <Text style={{ fontSize:18, fontWeight:'bold', marginLeft:15}}>Ưu đãi nổi bật</Text>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 1,
              }}
            >
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "#1087a5",
                    margin: 10,
                    alignItems: "center",
                    borderRadius: 20,
                    height: 170,
                    width: 190,
                  },
                ]}
              >
                <Image
                  source={item.image}
                  style={{ width: 70, height: 100, marginTop: 10 }}
                ></Image>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "white" }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#eac809" }}
                >
                  {item.price}$
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  export default PromotionPopular;