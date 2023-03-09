import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import provinceApi from "../../../utils/provinceApi";
import { Divider } from "@react-native-material/core";
import Loader from "../../../components/Loader/loader";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const win = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const TicketList = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const provinces = [
    {
      id: 1,
      from: "Bến xe Bờ Kè",
      to: "Bến xe Bờ Ao",
      price: 150,
      status: "Còn chỗ",
      startDate: "21:00 AM",
      endDate: "07:00 PM",
    },
    {
      id: 2,
      from: "Bến xe Mỹ Đình",
      to: "Bến xe Mỹ Phú",
      price: 100,
      status: "Còn chỗ",
      startDate: "21:30 AM",
      endDate: "07:00 PM",
    },
    {
      id: 3,
      from: "Bến xe Mỹ Đình",
      to: "Bến xe Mỹ Phú",
      price: 100,
      status: "Còn chỗ",
      startDate: "21:30 AM",
      endDate: "07:00 PM",
    },
    {
      id: 4,
      from: "Bến xe Mỹ Đình",
      to: "Bến xe Mỹ Phú",
      price: 100,
      status: "Còn chỗ",
      startDate: "21:30 AM",
      endDate: "07:00 PM",
    },
    {
      id: 5,
      from: "Bến xe Mỹ Đình",
      to: "Bến xe Mỹ Phú",
      price: 100,
      status: "Còn chỗ",
      startDate: "21:30 AM",
      endDate: "07:00 PM",
    },
  ];
  return (
    <View>
      <View style={styles.top}>
        <View style={styles.topInfo}>
          <Icon
            name="arrow-back"
            size={25}
            onPress={navigation.goBack}
            color="white"
          />
          <View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                Cao Bằng
              </Text>
              <MaterialIcons name="navigate-next" size={25} color="#fff" />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Thanh Hóa
              </Text>
            </View>

            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "700",
                marginLeft: 10,
              }}
            >
              10/03/2023
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                textDecorationLine: "underline",
                fontWeight: "700",
              }}
            >
              Thay đổi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={provinces}
        keyExtractor={(item) => item.id.toString()}
        style={{height: windowHeight - 100 }}
        renderItem={({ item }) => (
          <View>
            <View>
              <View
                style={{
                  display: "flex",
                  marginLeft: 10,
                  alignItems: "center",
                  padding: 10,
                  height: 200,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: windowWidth - 60,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <Text style={{ marginRight: 10, fontSize: 20 }}>
                        {item.startDate}
                      </Text>
                      <FontAwesome5
                        style={{ marginRight: 10 }}
                        name="dot-circle"
                        color="#3c67e8"
                        size={25}
                      />
                      <Text style={{ marginRight: 10, fontSize: 20 }}>
                        {item.from}
                      </Text>
                    </View>

                    <Text>{item.price}đ</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 16, marginLeft: 300 }}>
                    {item.status}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: windowWidth - 60,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <Text style={{ marginRight: 10, fontSize: 20 }}>
                        {item.endDate}
                      </Text>
                      <FontAwesome5
                        style={{ marginRight: 10 }}
                        name="dot-circle"
                        color="red"
                        size={25}
                      />
                      <Text style={{ marginRight: 10, fontSize: 20 }}>
                        {item.to}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#050b2d",
                      width: 100,
                      height: 30,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      marginTop: 30,
                      marginLeft: 230,
                    }}
                  >
                    <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                      Đặt vé
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Divider />
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: "#3c67e8",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  topInfo: {
    display: "flex",
    flexDirection: "row",
  },
  search: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#d8bcbc",
    borderBottomWidth: 3,
    paddingBottom: 5,
  },
});

export default TicketList;
