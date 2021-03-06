import React from 'react';
import { Text, View, Settings } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  

import MainStyles from '../../common/MainStyles';
import SplashScreen from '../../containers/SplashScreen';
import SettingsScreen from '../../containers/SettingsScreen';
import Color from '../../common/Color';
import DashboardScreen from '../DashboardScreen';
import ActivityScreen from '../ActivityScreen';
import CustomersScreen from '../CustomersScreen';
import LoginScreen from '../LoginScreen';
import CustomerProfile from '../CustomerProfile';
import IssueLoanScreen from '../IssueLoanScreen';
import CustomerSettingsScreen from '../CustomerSettingsScreen';
import InvestorProfileScreen from '../InvestorProfileScreen';


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
  Customers: {
    screen: CustomersScreen,
    navigationOptions:{  
      tabBarLabel:'Customers',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-people" color={tintColor} size={25}/>  
      )  
    }
  },
  Activity: {
    screen: ActivityScreen,
    navigationOptions:{  
      tabBarLabel:'Activity',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-pulse" color={tintColor} size={25}/>  
      )  
    }
  },
  Account: {
    screen: InvestorProfileScreen,
    navigationOptions:{  
      tabBarLabel:'My Account',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-person" color={tintColor} size={25}/>  
      )  
    }
  }
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
  Home: {
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
  IssueLoan: {
    screen: IssueLoanScreen,
    navigationOptions:{
      title:"Issue Loan"
    }
  },
  CustomerSettings: {
    screen: CustomerSettingsScreen,
    navigationOptions:{
      title:"Settings"
    }
  },
});

export default createAppContainer(StackNavigator);