import React, { useState } from "react";
import {
  Image,
  RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View
} from "react-native";
import COLORS from "../../consts/color";

const MyTicketCancel = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchData = () => {
    // Lấy dữ liệu từ API hoặc local storage
    // và cập nhật lại state data
    // setData(myData);
  };
  const onRefresh = () => {
    setIsRefreshing(true);
    fetchData();
    setIsRefreshing(false);
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
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
            Hãy thử kéo xuống để cập nhật danh sách vé của bạn trong thời gian
            qua
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: "#3c67e8",
    display: "flex",
    flexDirection: "row",
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

export default MyTicketCancel;
