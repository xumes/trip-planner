import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import assets from "./assets";

class TripScreen extends Component {
  static navigationOptions = {
    header: null
  };
  renderItem = item => {
    return (
      <View style={{ flex: 1, flexDirection: "row", paddingBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18
            }}
          >
            {item.item.name}
          </Text>
          <Text>{item.item.description}</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "center",
            paddingRight: 16
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#2463DC",
              fontWeight: "bold"
            }}
          >
            {item.item.price}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const trip = {
      name: "New York 2019",
      price: "R$ 5000",
      places: [
        {
          id: "a1",
          name: "Nova Iorque",
          description: "chegada",
          price: 1000,
          lat: 0,
          long: 0
        },
        {
          id: "b2",
          name: "Xumes Hotel",
          description: "Hospedagem",
          price: 100,
          lat: 0,
          long: 0
        },
        {
          id: "c3",
          name: "Rent a car",
          description: "Aluguel de Carro",
          price: 50,
          lat: 0,
          long: 0
        }
      ]
    };
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 192,
            backgroundColor: "grey"
          }}
        >
          <Text
            style={{
              position: "absolute",
              left: 16,
              bottom: 16
            }}
          >
            {trip.name}
          </Text>
          <Text style={styles.price}>{trip.price}</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 26,
            left: 16,
            padding: 10
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={assets.arrow} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingLeft: 16
          }}
          data={trip.places}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default TripScreen;
