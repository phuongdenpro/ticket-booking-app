import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyAccountScreen from "../screens/MyAccount/MyAccount";
import MyTicketNow from "../screens/MyTicket/MyTicketNow";
import NotificationScreen from "../screens/Notification/Notification";
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
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name="Vé của tôi"
        component={MyTicketNow}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-receipt-outline" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Ưu đãi"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="gift-outline" color={color} size={28} />
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
