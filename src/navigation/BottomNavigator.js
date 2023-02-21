import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/color';
import {View} from 'react-native';
import HomeScreen from '../screens/Home';
import MyTicketScreen from '../screens/MyTicket';
import NotificationScreen from '../screens/Notification';
import MyAccountScreen from '../screens/MyAccount';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions ={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}
      >
      <Tab.Screen
        name="Tìm vé"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={28} />
          ),  headerShown: false 
        }}
      />
      <Tab.Screen
        name="Vé của tôi"
        component={MyTicketScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),headerShown: false 
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),headerShown: false 
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={MyAccountScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" color={color} size={28} />
          ),headerShown: false 
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigator;