import { StyleSheet, Dimensions } from "react-native";

const dim = Dimensions.get("window");

const styles = StyleSheet.create({
  tripPrice: {
    position: "absolute",
    bottom: 16,
    right: 32,
    textAlign: "right",
    backgroundColor: "#2463DC",
    paddingRight: 4,
    paddingLeft: 4,
    color: "white"
  },
  item: { flex: 1, flexDirection: "row", paddingBottom: 16 },
  itemName: {
    fontWeight: "bold",
    fontSize: 18
  },
  wrapperInfo: { flex: 1 },

  wrapperItemPrice: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 16
  },
  itemPrice: {
    textAlign: "center",
    color: "#2463DC",
    fontWeight: "bold"
  },
  wrapper: { flex: 1 },
  header: {
    height: 192,
    backgroundColor: "grey"
  },
  backButton: {
    position: "absolute",
    left: 16,
    bottom: 16
  },
  tripName: {
    position: "absolute",
    top: 26,
    left: 16,
    padding: 10
  }

});

export default styles;
