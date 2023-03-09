import { TextInput } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
moment.locale("vi");
const win = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SearchComponent = (props) => {
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedFromPosition, setSelectedFromPosition] = useState({});
  const [selectedToPosition, setSelectedToPosition] = useState({});

  const handleCallBackFrom = (newData) => {
    setSelectedFromPosition(newData);
  };
  const handleCallBackTo = (newData) => {
    setSelectedToPosition(newData);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const x = moment(dt).format("DD-MM-YYYY");
    setSelectedDate(x);
    hideDatePicker();
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          height: "100%",
          width: windowWidth - 40,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: 10,
          borderRadius: 15,
          borderWidth: 1,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FontAwesome5 name="bus" size={25} color="blue" />
          <Text
            style={{
              fontSize: 20,
              color: "#000",
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Tìm kiếm chuyến xe
          </Text>
        </View>
        <View
          style={{
            width: windowWidth - 100,
            height: 50,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <FontAwesome5 name="dot-circle" color="#3c67e8" size={25} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SearchProvince", {
                callback: handleCallBackFrom,
                type: "from",
              })
            }
            style={{ display: "flex", flexDirection: "row" }}
          >
            <TextInput
              style={{
                height: "100%",
                flex: 1,
                fontSize: 16,
                width: "100%",
                marginLeft: 20,
                color: "#000",
              }}
              editable={false}
              autoCapitalize={false}
              variant="standard"
              label="Nơi xuất phát"
              value={selectedFromPosition?.name}
            ></TextInput>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: windowWidth - 100,
            height: 50,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="dot-circle" color="red" size={25} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SearchProvince", {
                callback: handleCallBackTo,
                type: "to",
              })
            }
            style={{ display: "flex", flexDirection: "row" }}
          >
            <TextInput
              style={{
                height: "100%",
                flex: 1,
                fontSize: 16,
                width: "100%",
                marginLeft: 20,
              }}
              label="Bạn muốn đi đâu"
              editable={false}
              autoCapitalize={false}
              variant="standard"
              value={selectedToPosition?.name}
            ></TextInput>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: windowWidth - 100,
            height: 50,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <MaterialIcons name="date-range" size={25} color="#3c67e8" />
          <TouchableOpacity
            onPress={showDatePicker}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <TextInput
              style={{
                height: "100%",
                flex: 1,
                fontSize: 16,
                width: "100%",
                marginLeft: 20,
              }}
              editable={false}
              autoCapitalize={false}
              variant="standard"
              label="Ngày đi"
              value={selectedDate}
            ></TextInput>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            style={{ width: "100%" }}
            locale="vi"
            datePickerModeAndroid="spinner"
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 350,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#141e5b",
          marginTop: 10,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("TicketList")}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
          Tìm vé
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
