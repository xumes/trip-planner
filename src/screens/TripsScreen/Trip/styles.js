import { StyleSheet, Dimensions } from "react-native";

const dim = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapperTrip: {
    backgroundColor: "white",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  image: {
    backgroundColor: "green",
    width: dim.width - 32,
    height: 144,
    marginBottom: 6
  },
  price: {
    position: "absolute",
    top: 144 - 16,
    right: 32,
    textAlign: "right",
    backgroundColor: "#2463DC",
    paddingRight: 4,
    paddingLeft: 4,
    color: "white"
  }
});

export default styles;
