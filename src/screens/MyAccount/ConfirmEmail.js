import {
    Button,
    Icon,
    InputItem,
    View,
    Text,
    Grid,
  } from "@ant-design/react-native";
  import { padding } from "../../utils/format";
  
  import { Image } from "react-native";
  import { useEffect, useRef, useState } from "react";
  import { Dimensions } from "react-native";
  // import { CodeField } from 'react-native-confirmation-code-field'
  import Loader from "../../components/Loader/loader";
  import { ToastAndroid } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import authApi from "../../utils/authApi";
  const win = Dimensions.get("window");
  
  const ConfirmEmailScreen = (props) => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState([]);
    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState();
  
    useEffect(() => {
      if (props.route.params.email) {
        setEmail(props.route.params.email);
      }
    }, [props.route.params.email]);
  
    console.log(email);
  
    useEffect(() => {
      let inputItems = [];
      for (var i = 0; i < 6; i++)
        inputItems.push(
          <InputItem
            style={{
              flex: 1,
            }}
            placeholder="x"
            underlineColor="transparent"
          ></InputItem>
        );
      setOtp(inputItems);
    }, []);
  
    const onVerify = async () => {
      try {
        console.log(phone);
        const res = await authApi.activeAccount({
          email: email,
          otp: value,
          type: "RESET_PASSWORD",
        });
  
        ToastAndroid.showWithGravityAndOffset(
          "Xác thực thành công!",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        navigation.navigate("ResetPasswordScreen", {
          email: email,
        });
      } catch (error) {
        ToastAndroid.showWithGravityAndOffset(
          error.response.data.message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
  
      // setIsLoading(true)
      // try {
      //     const res = await api.account.forgot_password_verify({
      //         phone: phone,
      //         code: value
      //     })
      //     console.log("onVerify", res)
      //     if (res.data.code == 1) {
      //         ToastAndroid.showWithGravityAndOffset(
      //             "Xác thực thành công, mật khẩu sẽ được gửi đến số điện thoại của bạn!",
      //             ToastAndroid.LONG,
      //             ToastAndroid.BOTTOM,
      //             25,
      //             50
      //         );
      //         navigation.navigate("Login")
      //         setIsLoading(false)
      //         return
      //     } else {
      //         ToastAndroid.showWithGravityAndOffset(
      //             "Mã OTP không hợp lệ!",
      //             ToastAndroid.LONG,
      //             ToastAndroid.BOTTOM,
      //             25,
      //             50
      //         );
      //         setIsLoading(false)
      //     }
      // } catch (error) {
      //     console.log('Failed:', error)
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
            ...padding(10, 7),
            flex: 1,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>
              Nhập mã OTP được gửi về{" "}
              
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>
                {email}
              </Text>
          </View>
          <InputItem
            type="number-pad"
            maxLength={6}
            value={value}
            onChangeText={setValue}
            placeholder="Mã OTP"
          ></InputItem>
          <Button
            type="primary"
            style={{
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#F9813A",
              borderColor: "black",
            }}
            onPress={onVerify}
          >
            Xác thực OTP
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          ></View>
        </View>
        <Loader isLoading={isLoading} />
      </View>
    );
  };
  
  export default ConfirmEmailScreen;
  