import { Button, InputItem, View, Text } from "@ant-design/react-native";
import { padding } from "../../utils/format";
import {
  Image,
  SafeAreaView,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import authApi from "../../utils/authApi";
import { validPassword } from "../../utils/regex";

const win = Dimensions.get("window");

const UpdateProfile = ({ phone }) => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const onChangePassword = async () => {
    if (password.trim() == "") {
      ToastAndroid.showWithGravityAndOffset(
        "Mật khẩu không được bỏ trống!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }

    if (!validPassword.test(newPassword)) {
      ToastAndroid.showWithGravityAndOffset(
        "Mật khẩu mới phải lớn hơn 6 ký tự!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }

    if (newPassword != reNewPassword) {
      ToastAndroid.showWithGravityAndOffset(
        "Nhập lại mật khẩu không khớp",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }

    try {
      const res = await authApi.change_password({
        oldPassword: password,
        newPassword: newPassword,
        confirmNewPassword: reNewPassword,
      });
      ToastAndroid.showWithGravityAndOffset(
        "Đổi mật khẩu thành công",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      navigation.goBack();
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        error.response.data.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
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
              marginLeft: 10,
            }}
          >
            Cập nhật thông tin
          </Text>
        </View>
      </View>
      <View
        style={{
          ...padding(10, 10),
        }}
      >
        <View style={styles.viewInput}>
          <InputItem
            style={styles.inputform}
            type="password"
            placeholder="Mật khẩu cũ"
            onChangeText={setPassword}
          ></InputItem>
        </View>
        <View style={styles.viewInput}>
          <InputItem
            style={styles.inputform}
            type="password"
            placeholder="Mật khẩu mới"
            onChangeText={setNewPassword}
          ></InputItem>
        </View>
        <View style={styles.viewInput}>
          <InputItem
            style={styles.inputform}
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            onChangeText={setReNewPassword}
          ></InputItem>
        </View>
        <Button
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginHorizontal: 10,
            backgroundColor: "#F43E26",
          }}
          onPress={onChangePassword}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
            Đổi mật khẩu
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#ea733c",
    display: "flex",
    flexDirection: "row",

    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  text: {
    marginLeft: "20%",
    fontSize: 20,
    fontWeight: "bold",
  },

  textIn: {
    fontSize: 20,
    fontStyle: "italic",
    marginTop: 40,
  },

  inputform: {},
  viewInput: {
    marginBottom: 10,
  },
});