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
import {
  Image,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/Loader/loader";
import authApi from "../../utils/authApi";
import { KeyboardAvoidingView, StatusBar } from "native-base";
import AntIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";


const win = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [page, setPage] = useState(SIGN_IN);
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <View style={{ height: "30%", width: "100%" }}>
        <TopComponent page={page} setPage={setPage}></TopComponent>
      </View>
      <View
        style={{ height: "50%", width: "100%", backgroundColor: "#f5f5f5" }}
      >
        {page === SIGN_IN ? <LoginComponent /> : null}
      </View>
      <View style={{ flex: 1 }}>
        <FooterComponent />
      </View>
    </View>
  );
};

const TopComponent = ({ page, setPage }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: "#3c67e8",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
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
          style={{ height: 50, flexDirection: "row", backgroundColor: "#fff" }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setPage(SIGN_IN)}
            disabled={page === SIGN_IN ? true : false}
          >
            <Text style={{ fontSize: 20, color: "#3c67e8" }}>Đăng nhập</Text>

            {page === SIGN_IN ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 3,
                  width: "100%",
                  backgroundColor: "#3c67e8",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setPage(SIGN_UP)}
            disabled={page === SIGN_UP ? true : false}
          >
            <Text style={{ fontSize: 20, color: "#3c67e8" }}>Đăng ký</Text>
            {page === SIGN_UP ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 3,
                  width: "100%",
                  backgroundColor: "#3c67e8",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const FooterComponent = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, marginTop: 20 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            width: windowWidth - 60,
            marginLeft: 30,
          }}
        >
          <View
            style={{ height: 1, width: "20%", backgroundColor: "#707070" }}
          ></View>

          <Text style={{marginLeft:20, marginRight:20}}>Hoặc đăng nhập bằng</Text>
          <View
            style={{ height: 1, width: "20%", backgroundColor: "#707070" }}
          ></View>
        </View>
        <View
          style={{
            height: 45,
            width: windowWidth - 60,
            marginLeft: 30,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              padding: 10,
              width: "45%",
              borderRadius: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={require("../../../assets/google.png")}
                style={{ width: 35, height: 35 }}
              ></Image>
              <Text style={{ color: "#000", fontSize: 16, marginLeft: 10 }}>
                Google
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              padding: 10,
              width: "45%",
              borderRadius: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={require("../../../assets/facebook.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text
                style={{
                  color: "#000",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                FaceBook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const LoginComponent = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("superman@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [passwordHidden, setPasswordHidden] = useState(true);
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
    console.log("access", token);
    try {
      const res = await authApi.getInfor();
      if (res.data.statusCode == 200) {
        console.log("vào");
        authApi.save_info(res);
        console.log(await AsyncStorage.getItem("info"));
        return;
      }
    } catch (error) {
      console.log("Failed:", error);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1, marginTop: 25 }}>
      <View
        style={{
          height: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24, marginLeft: 30 }}>
          Đăng nhập bằng tài khoản.
        </Text>
        <View
          style={{
            width: windowWidth - 60,
            marginLeft: 30,
            height: 45,
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <AntIcon
            name="user"
            size={20}
            color="#000"
            style={{ marginLeft: 10 }}
          />
          <ScrollView keyboardShouldPersistTaps="handled">
            <TextInput
              style={{
                height: "100%",
                flex: 1,
                marginLeft: 10,
                fontSize: 16,
                width: "100%",
              }}
              autoCapitalize={false}
              placeholder="Email hoặc số điện thoại"
              onChangeText={setEmail}
              defaultValue="superman@gmail.com"
              type="email"
            ></TextInput>
          </ScrollView>
        </View>

        <View
          style={{
            width: windowWidth - 60,
            marginLeft: 30,
            height: 45,
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <FeatherIcon
            name="lock"
            size={20}
            color="#000"
            style={{ marginLeft: 10 }}
          />
          <TextInput
            style={{ height: "90%", flex: 1, marginLeft: 10, fontSize: 16 }}
            autoCapitalize={false}
            placeholder="Mật khẩu"
            secureTextEntry={passwordHidden ? true : false}
            type="password"
            onChangeText={setPassword}
            defaultValue="12345678"
          ></TextInput>
          <TouchableOpacity
            style={{
              height: "100%",
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setPasswordHidden(!passwordHidden)}
          >
            <AntIcon
              name="eye"
              style={{ width: 20, height: "100%", marginTop: 25 }}
              size={20}
            ></AntIcon>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: windowWidth - 60,
            marginLeft: 30,
            height: 30,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ position: "absolute", right: 0 }}>
            <Text style={{ color: "#707070" }}>Quên mật khẩu ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: windowWidth - 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3c67e8",
            marginLeft: 30,
            marginTop: 10,
            borderRadius: 100,
          }}
          onPress={onLogin}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Đăng nhập</Text>
        </TouchableOpacity>
        <Loader isLoading={isLoading} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
