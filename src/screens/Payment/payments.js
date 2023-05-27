import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Alert } from "react-native";
import { Linking } from "react-native";
import { WebView } from "react-native-webview";
import orderApi from "../../utils/orderApi";

// URL thanh toán của Zalo Pay
const redirectUri = "https://ticket-booking-client.vercel.app/"; // đường dẫn đăng ký với Zalo Pay

const PaymentScreen = ({ navigation, route }) => {
  const url = route.params.url;
  const dataOrder = route.params.dataOrder;
  const webviewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleNavigationStateChange = async (navState) => {
    if (navState.url.includes("https://ticket-booking-client.vercel.app/")) {
      setLoading(false);
      // Xử lý khi thanh toán thành công
      try {
        const res = await orderApi.getOrderById(dataOrder.id);
        const order = res.data.data;
        if (order.status == "Đã thanh toán") {
          navigation.navigate("Vé của tôi");
          Alert.alert("Đặt vé thành công!");
        } else {
          navigation.goBack();
          Alert.alert("Đã xảy ra lỗi!");
        }
      } catch (error) {}
    }
  };

  return (
    <WebView
      source={{ uri: url }}
      style={{ flex: 1 }}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
      onNavigationStateChange={handleNavigationStateChange}
    />
  );
};

export default PaymentScreen;
