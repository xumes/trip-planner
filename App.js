import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'
import TripScreen from './src/screens/TripScreen'
import AddPointScreen from './src/screens/AddPointScreen'
import AddTripScreen from './src/screens/AddTripScreen'

const appNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Trips: TripsScreen,
    Trip: TripScreen,
    AddPoint: AddPointScreen,
    AddTrip: AddTripScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(appNavigator)
