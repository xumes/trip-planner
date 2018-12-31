import React, { Component } from "react";
import {Text} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import TripScreen from './src/screens/TripsScreen'

const appNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Trips: TripScreen
  },
  {
    initialRouteName: "Trips"
  }
);

export default createAppContainer(appNavigator);
