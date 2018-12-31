import { StyleSheet, Dimensions } from "react-native";

const dim = Dimensions.get("window");

const styles = StyleSheet.create({
  price: {
    position: "absolute",
    bottom: 16,
    right: 32,
    textAlign: "right",
    backgroundColor: "#2463DC",
    paddingRight: 4,
    paddingLeft: 4,
    color: "white"
  }
});

export default styles;
