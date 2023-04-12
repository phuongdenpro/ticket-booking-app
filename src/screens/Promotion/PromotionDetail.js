import React, { useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import COLORS from "../../consts/color";
import {
  default as Icon,
  default as MaterialIcons,
} from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import promotionApi from "../../utils/promotionApi";
import { useEffect } from "react";

const PromotionDetail = ({ navigation, route }) => {
  const dataPromotion = route.params.item;
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [promotionLine, setPromotionLine] = useState([]);

  const getPromotionLine = async () => {
    try {
      const res = await promotionApi.getPromotionLine(dataPromotion.code);
      setPromotionLine(res?.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPromotionLine();
  }, [dataPromotion]);

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
        <View style={styles.top}>
          <Icon
            name="arrow-back"
            size={25}
            onPress={navigation.goBack}
            color="white"
          />
          <View style={styles.topInfo}>
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Chi tiết ưu đãi
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            source={{ uri: dataPromotion?.image }}
            style={{ width: 100, height: 100, marginTop: 30 }}
          ></Image>
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {dataPromotion.name}
          </Text>
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Ngày kết thúc: {moment(dataPromotion.endDate).format("DD/MM/YYYY")}
          </Text>
        </View>
        <View>
          <Text>Thông tin chung</Text>
          <View style={styles.content2}>
            <Text>Mô tả: {dataPromotion?.description}</Text>
            <Text>Danh sách khuyến mãi:</Text>
            {promotionLine.length > 0 &&
              promotionLine.map((item) => (
                <View>
                  <Text> {item.title}</Text>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: "#ea733c",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // alignItems: "center",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#f5f5f5'
  },
  content2:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#f5f5f5'
  }
});

export default PromotionDetail;
