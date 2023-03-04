import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/color";
import { PrimaryButton } from "../../components/Button/Button";

const MyTicketNow = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/ticket-removebg-preview.png")}
          style={{ width: 200, height: 200, marginTop: 150 }}
        ></Image>
        <Text
          style={{
            color: "#000",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Bạn chưa có vé nào
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginHorizontal: 20,
            marginTop: 5,
          }}
        >
          Hãy thử kéo xuống để cập nhật danh sách vé của bạn trong thời gian qua
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

export default MyTicketNow;
