import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import PromotionPopular from "./Component/PromotionPopular";
import SearchComponent from "./Component/SearchTicket";
import TripPopular from "./Component/TripPopular";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import authApi from "../../utils/authApi";
const win = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SearchScreen = ({ navigation }) => {
  const [info, setInfo] = useState({});

  const handleInfo = async () => {
    const _info = await authApi.getStorageInfo();
    setInfo(_info);
  };

  useEffect(() => {
    handleInfo();
  }, [info]);
  return (
    <ScrollView>
      <StatusBar barStyle="light-content"></StatusBar>
      <View
        style={{
          backgroundColor: "#f5f5f5",
          flex: 1,
        }}
      >
        <View style={styles.top}>
          <View style={styles.topInfo}>
            <Image
              source={require("../../../assets/logo.png")}
              style={{ height: 40, width: 40 }}
            />
            <Text style={{ color: "#fff", fontWeight: "bold" }}>PDBus</Text>
          </View>
          <TouchableOpacity
            style={{ display: "flex", flexDirection: "row" }}
            onPress={() => navigation.navigate('Tài khoản')}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              Chào {info.fullName}
            </Text>
            <MaterialIcons name="navigate-next" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{ height: 320, width: "100%", backgroundColor: "#f5f5f5" }}
        >
          <SearchComponent />
        </View>
        <View
          style={{
            height: 200,
            width: "100%",
            backgroundColor: "#f5f5f5",
            marginTop: 50,
          }}
        >
          <TripPopular />
        </View>
        <View
          style={{
            height: 200,
            width: "100%",
            backgroundColor: "#f5f5f5",
            marginTop: 40,
          }}
        >
          <PromotionPopular />
        </View>

        <View style={{ height: 500, marginTop: 50, width: windowWidth - 60 }}>
          <Text
            style={{
              marginBottom: 20,
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 15,
            }}
          >
            Nền tảng kết nối người dùng và nhà xe
          </Text>
          <View style={styles.itemInfo}>
            <View style={styles.itemInfoIcon}>
              <FontAwesome5 name="bus" size={35} color="blue" />
            </View>
            <View style={styles.itemInfoContent}>
              <Text style={styles.textHeader}>2000+ nhà xe chất lượng cao</Text>
              <Text style={styles.textContent}>
                5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.itemInfo}>
            <View style={styles.itemInfoIcon}>
              <MaterialCommunityIcons name="ticket" size={35} color="#f2824b" />
            </View>
            <View style={styles.itemInfoContent}>
              <Text style={styles.textHeader}>Đặt vé dễ dàng</Text>
              <Text style={styles.textContent}>
                Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.
              </Text>
            </View>
          </View>
          <View style={styles.itemInfo}>
            <View style={styles.itemInfoIcon}>
              <MaterialCommunityIcons
                name="check-decagram"
                size={35}
                color="#146d25"
              />
            </View>
            <View style={styles.itemInfoContent}>
              <Text style={styles.textHeader}>Đảm bảo có vé</Text>
              <Text style={styles.textContent}>
                Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn vẹn cho
                khách hàng.
              </Text>
            </View>
          </View>
          <View style={styles.itemInfo}>
            <View style={styles.itemInfoIcon}>
              <MaterialCommunityIcons
                name="tag-heart-outline"
                size={35}
                color="#e5141b"
              />
            </View>
            <View style={styles.itemInfoContent}>
              <Text style={styles.textHeader}>Nhiều ưu đãi</Text>
              <Text style={styles.textContent}>
                Hàng ngàn ưu đãi cực độc quyền tại PDBus.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#3c67e8",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
  topInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputSearch: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: windowWidth - 60,
    height: "40%",
  },
  itemInfo: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 15,
  },
  itemInfoIcon: {
    marginRight: 10,
  },
  itemInfoContent: {
    marginLeft: 10,
  },
  textHeader: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
  },
  textContent: {
    fontSize: 15,
    color: "#847777",
  },
});

export default SearchScreen;
