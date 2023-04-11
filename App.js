import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import BottomNavigator from "./src/navigation/BottomNavigator";
import ChangePassScreen from "./src/screens/Change_Password/Change_Password";
import Login from "./src/screens/Login/Login";
import MyTicketScreen from "./src/screens/MyTicket/MyHistoryTicket";
import SearchProvince from "./src/screens/Search/Component/SearchProvinceFrom";
import TicketList from "./src/screens/Search/Component/TicketList";
import WelcomeScreen from "./src/screens/WelCome/WelCome";
import TicketScreen from "./src/screens/Ticket/Ticket";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          //   screenOptions={{
          //     headerShown: false
          // }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Đăng nhập", headerShown: false }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassScreen}
            options={{ title: "Đổi mật khẩu", headerShown: false }}
          />
          <Stack.Screen
            name="SearchProvince"
            component={SearchProvince}
            options={{ title: "Tìm kiếm nơi đi", headerShown: false }}
          />
          <Stack.Screen
            name="TicketList"
            component={TicketList}
            options={{ title: "Tìm vé", headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyTicket"
            component={MyTicketScreen}
            options={{ title: "Đăng nhập", headerShown: false }}
          />
          <Stack.Screen
            name="TicketScreen"
            component={TicketScreen}
            options={{ title: "Danh sách ghế", headerShown: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
