import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../consts/color";
import { View } from "react-native";
import HomeScreen from "../screens/Home/Home";
import MyTicketScreen from "../screens/MyTicket/MyTicket";
import NotificationScreen from "../screens/Notification/Notification";
import MyAccountScreen from "../screens/MyAccount/MyAccount";
import SearchScreen from "../screens/Search/Search";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor:'white',

        },
        showLabel: true,
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Tìm vé"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Vé của tôi"
        component={MyTicketScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-receipt-outline" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={MyAccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
