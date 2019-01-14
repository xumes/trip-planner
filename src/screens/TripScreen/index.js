import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import assets from "./assets";
import MapView, { Marker } from "react-native-maps";

class TripScreen extends Component {
  static navigationOptions = {
    header: null
  };
  renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.itemName}>{item.item.name}</Text>
          <Text>{item.item.description}</Text>
        </View>
        <View style={styles.wrapperItemPrice}>
          <Text style={styles.itemPrice}>{item.item.price}</Text>
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
        },
        {
          id: "d4",
          name: "Rent a car",
          description: "Aluguel de Carro",
          price: 50,
          lat: 0,
          long: 0
        },
        {
          id: "e5",
          name: "Rent a car",
          description: "Aluguel de Carro",
          price: 50,
          lat: 0,
          long: 0
        },
        {
          id: "f6",
          name: "Rent a car",
          description: "Aluguel de Carro",
          price: 50,
          lat: 0,
          long: 0
        },
        {
          id: "g7",
          name: "Rent a car",
          description: "Aluguel de Carro",
          price: 50,
          lat: 0,
          long: 0
        }
      ]
    };
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              draggable
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            />
          </MapView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>{trip.price}</Text>
        </View>
        <View>
          <Text style={styles.labelName}>Pontos de interesse</Text>
          <Image
            style={{ position: "absolute", right: 16, top: 14 }}
            source={assets.plus}
          />
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
