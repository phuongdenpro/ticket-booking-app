import React, { useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
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
import orderApi from "../../utils/orderApi";
import QRCode from "react-native-qrcode-svg";
import { convertCurrency } from "../../utils/curren";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Payment = ({ navigation, route }) => {
//   const dataOrder = route.params.item;
//   const [detail, setDetail] = useState();
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [promotionLine, setPromotionLine] = useState([]);

//   const getDetail = async () => {
//     try {
//       const res = await orderApi.getOrderById(dataOrder.id);
//       console.log(res?.data.data);
//       setDetail(res?.data.data);
//     } catch (error) {
//       console.log("Failed:", error);
//       ToastAndroid.showWithGravityAndOffset(
//         error.response.data.message,
//         ToastAndroid.LONG,
//         ToastAndroid.BOTTOM,
//         25,
//         50
//       );
//     }
//   };

//   useEffect(() => {
//     getDetail();
//   }, [dataOrder]);

  
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
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
            Thanh toán
          </Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.textItem}>Khách hàng:</Text>
          
        </View>
        
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              marginTop: 10,
              backgroundColor: "#f2e941",
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight:'bold', color:'#000' }}>Hủy vé</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  content2: {
    display: "flex",
    backgroundColor: "#edd0d0",
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  contentItem: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  textItem: {
    fontWeight: "700",
    fontSize: 15,
    marginRight: 10,
  },
});

export default Payment;
