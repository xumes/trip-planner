import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import MapView from "react-native-maps";
import Trip from "./Trip";
import isIphoneX from "../../utils/isIphoneX";
import assets from "../TripScreen/assets";

class TripsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  renderItem = item => {
    return (
      <Trip
        onPress={() => this.props.navigation.navigate("Trip")}
        title={item.item.name}
        price={item.item.price}
      />
    );
  };

  render() {
    console.log(isIphoneX());
    const trips = [
      { id: "a1", name: "New York 2019", price: "R$ 7500" },
      { id: "b2", name: "Safari Africa do Sul", price: "R$ 5550" },
      { id: "c3", name: "Ciudad del Este", price: "R$ 4500" }
    ];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "stretch"
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddTrip")}
            style={{ position: "absolute", bottom: 0, right: 20, padding: 10 }}
          >
            <Image source={assets.plus} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white"
          }}
        />
        <FlatList
          data={trips}
          renderItem={this.renderItem}
          horizontal
          pagingEnabled
          keyExtractor={item => item.id}
          style={[isIphoneX() ? { marginBottom: 20 } : null]}
        />
      </View>
    );
  }
}

export default TripsScreen;
