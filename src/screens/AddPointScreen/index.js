import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

import styles from "./styles";
import assets from "./assets";
import MapView, { Marker } from "react-native-maps";

class AddPointScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    position: {
      latitude: -22.8533,
      longitude: -47.2147
    },
    pointName: "",
    description: "",
    price: 0
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
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.state.position.latitude,
              longitude: this.state.position.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              draggable
              coordinate={{ latitude: this.state.position.latitude, longitude: this.state.position.longitude }}
              onDragEnd={evt =>
                this.setState({ position: evt.nativeEvent.coordinate })
              }
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
        <View style={styles.wrapperLabelTrip}>
        <Text style={styles.labelTripName}>
          Adicione pontos de interesse
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Ponto"
          onChangeText={nome => this.setState({ pointName: nome })}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          onChangeText={descr => this.setState({ description: descr })}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          onChangeText={preco => this.setState({ price: parseFloar(preco) })}
        />
        <TouchableOpacity>
          <Text style={styles.btn}>Salvar Ponto</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

export default AddPointScreen;
