import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/color";
import { PrimaryButton } from "../../components/Button/Button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyTicketCancel from "./MyTicketCancel";
import MyTicketIssued from "./MyTicketIssued";
import MyTicketNow from "./MyTicketNow";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="MyTicketIssued"
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#F8F8F8",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
        },
        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 12,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "#3c67e8",
          borderBottomWidth: 2,
        },
        tabBarPressColor: "#3c67e8",
      }}
    >
      <Tab.Screen
        name="MyTicketIssued"
        options={{
          tabBarLabel: "Vé đã đi",
          tabBarLabelStyle: {
            color: "#000",
            fontSize: 15,
            fontWeight: "600",
            textTransform: "capitalize",
          },
        }}
        component={MyTicketIssued}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            console.log("vào 2");

            // Do something with the `navigation` object
            navigation.navigate("MyTicketIssued");
          },
        })}
      />

      <Tab.Screen
        name="MyTicketCancel"
        options={{
          tabBarLabel: "Vé đã hủy",
          tabBarLabelStyle: {
            color: "#000",
            fontSize: 15,
            fontWeight: "600",
            textTransform: "capitalize",
          },
        }}
        component={MyTicketCancel}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            console.log("vào 3");

            // Do something with the `navigation` object
            navigation.navigate("MyTicketCancel");
          },
        })}
      />
    </Tab.Navigator>
  );
};

const MyTicketScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}
    >
      <View style={styles.top}>
        <Icon
          name="arrow-back"
          size={24}
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
            Lịch sử đặt vé
          </Text>
        </View>
      </View>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#633689" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="TabStack"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
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
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyTicketScreen;
