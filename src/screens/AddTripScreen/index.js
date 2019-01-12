import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage
} from "react-native";

import styles from "./styles";
import assets from "./assets";

class TripScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    trip: "",
    price: 0
  };

  handleSave = async () => {
    const trip = {
      id: new Date().getTime(),
      trip: this.state.trip,
      price: 0,
      latitude: 0,
      longitude: 0
    };
    const tripsAS = await AsyncStorage.getItem("trips");
    let trips = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    trips.push(trip)
    await AsyncStorage.setItem('trips', JSON.stringify(trips))
    console.log("trips", trips);
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
          id: "c3",
          name: "Rent a car",
          description: "Aluguel de Carro",
          price: 50,
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
          id: "c3",
          name: "Rent a car",
          description: "Aluguel de Carro",
          price: 50,
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
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>{trip.price}</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nome da viagem"
          onChangeText={txt => this.setState({ trip: txt })}
        />

        <TouchableOpacity onPress={this.handleSave}>
          <Text style={styles.btn}>Salvar Viagem</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TripScreen;
