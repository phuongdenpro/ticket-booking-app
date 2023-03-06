import {
  Button,
  Icon,
  InputItem,
  View,
  Text,
  Toast,
} from "@ant-design/react-native";
import { padding } from "../../utils/format";
// import { IconOutline } from '@ant-design/icons-react-native'
import { Image, ToastAndroid, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/Loader/loader";
import authApi from "../../utils/authApi";


const win = Dimensions.get("window");

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("dangdan28075@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async () => {
    setIsLoading(true);
    try {
      const res = await authApi.login({
        email: email,
        password: password,
      });
      if (res.data.statusCode == 200) {
        authApi.save_token(res);
        handleVerifyCustomer();
        navigation.navigate("Home");
      } else {
        ToastAndroid.showWithGravityAndOffset(
          "Sai số điện thoại hoặc mật khẩu!",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Failed:", error);
      ToastAndroid.showWithGravityAndOffset(
        "Có lỗi xảy ra, vui lòng thử lại sau ít phút!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setIsLoading(false);
    }
  };

  const handleVerifyCustomer = async () => {
    let token = await AsyncStorage.getItem("access");
    console.log("access", token)
    try {
      const res = await authApi.getInfor();
      if (res.data.statusCode == 200) {
        authApi.save_info(res);
        return;
      }
    } catch (error) {
      console.log("Failed:", error);
    }
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
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <Image
          style={{
            flex: 1,
            alignSelf: "stretch",
            width: 300,
            height: 300,
            resizeMode: "contain",
          }}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#F9813A" }}>
          Đăng nhập
        </Text>
      </View>
      <View
        style={{
          ...padding(10, 20),
        }}
      >
        <InputItem
          placeholder="Nhập email"
          onChangeText={setEmail}
          defaultValue="dangdan28075@gmail.com"
          type="email"
        ></InputItem>
        <InputItem
          type="password"
          placeholder="Mật khẩu"
          onChangeText={setPassword}
          defaultValue="12345678"
        ></InputItem>
        <Button
          style={{
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: "#3c67e8",
            borderColor: "black",
          }}
          onPress={onLogin}
        >
          Đăng nhập
        </Button>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Forgot");
            }}
          >
            <Text style={{ color: "blue" }}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default LoginScreen;
