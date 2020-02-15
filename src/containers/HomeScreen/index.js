import React from 'react';
import { Text, View, Settings } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Icon} from 'native-base';  

import MainStyles from '../../common/MainStyles';
import SplashScreen from '../../containers/SplashScreen';
import SettingsScreen from '../../containers/SettingsScreen';
import Color from '../../common/Color';
import DashboardScreen from '../DashboardScreen';
import LoansScreen from '../LoansScreen';
import PaymentsScreen from '../PaymentsScreen';
import CustomersScreen from '../CustomersScreen';
import LoginScreen from '../LoginScreen';
import CustomerProfile from '../CustomerProfile';
import IssueLoanScreen from '../IssueLoanScreen';


const TabNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions:{  
      tabBarLabel:'Dashboard',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-stats" color={tintColor} size={25}/>  
      )  
    }
  },
  Loans: {
    screen: LoansScreen,
    navigationOptions:{  
      tabBarLabel:'Loans',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-card" color={tintColor} size={25}/>  
      )  
    }
  },
  Payments: {
    screen: PaymentsScreen,
    navigationOptions:{  
      tabBarLabel:'Payments',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-cash" color={tintColor} size={25}/>  
      )  
    }
  },
  Customers: {
    screen: CustomersScreen,
    navigationOptions:{  
      tabBarLabel:'Customers',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-people" color={tintColor} size={25}/>  
      )  
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: Color.LightGrey,
  },
});

const RootNavigator = createSwitchNavigator(
  {
    SplashScreen,
    HomeScreen: {screen: TabNavigator}
  },
  {
    initialRouteName: 'SplashScreen'
  }
);

const StackNavigator = createStackNavigator({
  AppEntry: {
    screen: RootNavigator,
    navigationOptions: {
      headerShown: false
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Settings: SettingsScreen,
  Profile: CustomerProfile,
  IssueLoan: IssueLoanScreen
});

export default createAppContainer(StackNavigator);