import React, { Component } from "react";
import {
  View,
  Text,
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
    trips.push(trip);
    await AsyncStorage.setItem("trips", JSON.stringify(trips));
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
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripName}>{this.state.trip}</Text>
        </View>
        <View style={styles.wrapperLabelTrip}>
          <Text style={styles.labelTripName}>
            Crie a sua próxima viagem
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da viagem"
            onChangeText={txt => this.setState({ trip: txt })}
          />

          <TouchableOpacity onPress={this.handleSave}>
            <Text style={styles.btn}>Salvar Viagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TripScreen;
