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
// import { validPassword } from '../utils/regex';

const win = Dimensions.get("window");

const ChangePassScreen = ({ phone }) => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  // const onChangePassword = async () => {
  //     const info = await api.account.get_storage_info()
  //     if(password.trim() == ""){
  //         ToastAndroid.showWithGravityAndOffset(
  //             "Mật khẩu không được bỏ trống!",
  //             ToastAndroid.LONG,
  //             ToastAndroid.BOTTOM,
  //             25,
  //             50
  //         );
  //         return
  //     }

  //     if(!validPassword.test(newPassword)){
  //         ToastAndroid.showWithGravityAndOffset(
  //             "Mật khẩu mới phải lớn hơn 6 ký tự!",
  //             ToastAndroid.LONG,
  //             ToastAndroid.BOTTOM,
  //             25,
  //             50
  //         );
  //         return
  //     }

  //     if(newPassword != reNewPassword){
  //         ToastAndroid.showWithGravityAndOffset(
  //             "Nhập lại mật khẩu không khớp",
  //             ToastAndroid.LONG,
  //             ToastAndroid.BOTTOM,
  //             25,
  //             50
  //         );
  //         return
  //     }

  //     try{
  //         const res = await api.account.change_password({
  //             phone: info.phone,
  //             password: password,
  //             new_password: newPassword
  //         })
  //         if(res.data.code == 1){
  //             ToastAndroid.showWithGravityAndOffset(
  //                 "Đổi mật khẩu thành công",
  //                 ToastAndroid.LONG,
  //                 ToastAndroid.BOTTOM,
  //                 25,
  //                 50
  //             );
  //             navigation.goBack()
  //         }else{
  //             ToastAndroid.showWithGravityAndOffset(
  //                 res.data.message,
  //                 ToastAndroid.LONG,
  //                 ToastAndroid.BOTTOM,
  //                 25,
  //                 50
  //             );
  //         }

  //     }catch(error) {
  //         console.log('Failed:', error)
  //     }
  // }

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
          <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold", marginLeft:10 }}>
            Đổi mật khẩu
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
            backgroundColor: "#3c67e8",
          }}
          // onPress={onChangePassword}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color:"#fff" }}>Đổi mật khẩu</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassScreen;

const styles = StyleSheet.create({
    top: {
        backgroundColor: "#3c67e8",
        display: "flex",
        flexDirection: "row",
        marginTop: 35,
    
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
