import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/color";
import { PrimaryButton } from "../../components/Button/Button";
import Ionicons from "react-native-vector-icons/Ionicons";

const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}
    >
      <View style={styles.top}>
        <View style={styles.topInfo}>
          <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
            Thông báo
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/chuong-removebg-preview.png")}
          style={{ width: 200, height: 200, marginTop: 150 }}
        ></Image>
        <Text
          style={{
            color: "#000",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Bạn chưa có thông báo nào
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginHorizontal: 20,
            marginTop: 5,
          }}
        >
          Bạn sẽ nhận được thông báo khi có thông tin cập nhật về vé, chuyến đi
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: "#3c67e8",
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationScreen;
