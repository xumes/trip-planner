import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View>
          <Image source={require("../../assets/logo-tripplaner.png")} />
        </View>
        <View>
          <Image source={require("../../assets/logo-devpleno.png")} />
        </View>
        <View>
          <Text>COMEÇAR</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;
