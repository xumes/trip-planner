import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
  ImageBackground
} from "react-native";
import axios from "axios";

import styles from "./styles";
import assets from "./assets";

class TripScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    trip: "",
    price: 0,
    image:
      "https://www.estudokids.com.br/wp-content/uploads/2015/05/viagem-ou-viajem-qual-o-correto.jpg"
  };

  handleSave = async () => {
    await this.getImage(this.state.trip);
    const trip = {
      id: new Date().getTime(),
      trip: this.state.trip,
      price: 0,
      image: this.state.image
    };
    const tripsAS = await AsyncStorage.getItem("trips");
    let trips = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    trips.push(trip);
    await AsyncStorage.setItem("trips", JSON.stringify(trips));
    console.log("trips", trips);
    console.log("*** Imagem", this.state.image);
  };

  getImage = async tripImage => {
    console.log("buscando imagens");
    const params = {
      key: "<<API_KEY>>",
      cx: "<<CX>>",
      searchType: "image",
      lr: "lang_pt",
      num: 1,
      q: tripImage
    };
    return axios
      .get("https://www.googleapis.com/customsearch/v1", { params })
      .then(resp => this.setState({ image: resp.data.items[0].link }))
      .catch(err => console.log(err));
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
          <ImageBackground source={{uri: this.state.image}} style={styles.headerImage}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripName}>{this.state.trip}</Text>
          </ImageBackground>
        </View>
        <View style={styles.wrapperLabelTrip}>
          <Text style={styles.labelTripName}>Crie a sua próxima viagem</Text>
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
