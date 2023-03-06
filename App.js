import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import BottomNavigator from "./src/navigation/BottomNavigator";
import WelcomeScreen from "./src/screens/WelCome/WelCome";
import Login from "./src/screens/Login/Login";
import MyTicketScreen from "./src/screens/MyTicket/MyHistoryTicket";
import ChangePassScreen from "./src/screens/Change_Password/Change_Password";

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
            name="Home"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyTicket"
            component={MyTicketScreen}
            options={{ title: "Đăng nhập", headerShown: false }}
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
