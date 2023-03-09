import { TextInput } from "@react-native-material/core";
import moment from "moment";
import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
moment.locale("vi");
const win = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SearchComponent = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

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
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 15,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FontAwesome5 name="bus" size={25} color="blue" />
          <Text style={{ fontSize: 20, color: "#3c67e8" }}>
            Tìm kiếm chuyến xe
          </Text>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 3,
              width: "100%",
              backgroundColor: "#3c67e8",
            }}
          ></View>
        </View>
        <View
          style={{
            width: windowWidth - 100,
            height: 45,
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="dot-circle" color="#3c67e8" size={25} />
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
                color: "#000",
              }}
              editable={false}
              autoCapitalize={false}
              variant="standard"
              label="Nơi xuất phát"
            ></TextInput>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: windowWidth - 100,
            height: 45,
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="dot-circle" color="red" size={25} />
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
                borderBottomColor: "#998e8e",
              }}
              label="Bạn muốn đi đâu"
              editable={false}
              autoCapitalize={false}
              variant="standard"
            ></TextInput>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: windowWidth - 100,
            height: 45,
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={showDatePicker}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <MaterialIcons name="date-range" size={25} color="#3c67e8" />
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
      >
        <Text style={{ color: "white", fontSize: 16 }}>Tìm vé</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
