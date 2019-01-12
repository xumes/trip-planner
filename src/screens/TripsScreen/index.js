import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import Trip from "./Trip";
import isIphoneX from '../../utils/isIphoneX'

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
    console.log(isIphoneX())
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
            backgroundColor: "pink",
            flex: 1
          }}
        >
          <Text>Mapa</Text>
        </View>
        <View
          style={{
            backgroundColor: "yellow"
          }}
        />
        <FlatList
          data={trips}
          renderItem={this.renderItem}
          horizontal
          pagingEnabled
          keyExtractor={item => item.id}
          style={[
            isIphoneX() ? {marginBottom: 20} : null
          ]}
        />
      </View>
    );
  }
}

export default TripsScreen;
