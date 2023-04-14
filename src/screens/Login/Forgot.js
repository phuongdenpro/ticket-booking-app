import { Button, InputItem, View, Text } from "@ant-design/react-native";
import { padding } from "../../utils/format";
import { IconOutline } from "@ant-design/icons-react-native";
import { Image } from "react-native";
import { useRef, useState } from "react";
import { Dimensions } from "react-native";
import Loader from "../../components/Loader/loader";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  default as Icon,
  default as MaterialIcons,
} from "react-native-vector-icons/MaterialIcons";
const win = Dimensions.get("window");

const ForgotScreen = (props) => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSendOTP = async () => {
    // setIsLoading(true)
    // try {
    //     const res = await api.account.forgot_password({
    //         phone: phone
    //     })
    //     console.log("onSendOTP", res)
    //     if (res.data.code == 1) {
    //         ToastAndroid.showWithGravityAndOffset(
    //             "Gửi OTP thành công!",
    //             ToastAndroid.LONG,
    //             ToastAndroid.BOTTOM,
    //             25,
    //             50
    //         );
    //         navigation.navigate("ForgotVerify", { phone: phone })
    //     } else {
    //         ToastAndroid.showWithGravityAndOffset(
    //             "Có lỗi xảy ra, vui lòng thử lại sau ít phút!",
    //             ToastAndroid.LONG,
    //             ToastAndroid.BOTTOM,
    //             25,
    //             50
    //         );
    //     }
    //     setIsLoading(false)
    // } catch {
    //     ToastAndroid.showWithGravityAndOffset(
    //         "Có lỗi xảy ra, vui lòng thử lại sau ít phút!",
    //         ToastAndroid.LONG,
    //         ToastAndroid.BOTTOM,
    //         25,
    //         50
    //     );
    //     setIsLoading(false)
    // }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "#ea733c",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: "50%",
        }}
      >
        {" "}
        <Image
          source={require("../../../assets/logo.png")}
          style={{ height: 100, width: 100 }}
        ></Image>
        <View>
          <Text style={{ fontSize: 40, fontWeight: "600", color: "#ffffff" }}>
            PDBus
          </Text>
          <Text style={{ color: "#ffffff" }}>đặt vé xe giá rẻ</Text>
        </View>
      </View>

      <View
        style={{
          ...padding(10, 20),
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "500", color: "#050f59" }}>
            Quên mật khẩu
          </Text>
        </View>
        <InputItem
          placeholder="Email hoặc số điện thoại"
          onChangeText={setPhone}
          type="phone"
          style={{borderWidth:1, width:'100%', borderColor:'#ccc', padding:3}}
        ></InputItem>
        <Button
          type="primary"
          style={{
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: "#F9813A",
            borderColor: "black",
          }}
          onPress={onSendOTP}
        >
          Gửi mã OTP
        </Button>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Text style={{fontSize:17}}>Đăng nhập</Text>
            <Icon name="navigate-next" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Loader isLoading={isLoading} />
    </View>
  );
};
export default ForgotScreen;
