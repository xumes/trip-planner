import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tripPrice: {
    position: "absolute",
    bottom: 16,
    right: 16,
    textAlign: "right",
    backgroundColor: "#2463DC",
    paddingTop: 4,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 4,
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
    textAlign: "right",
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
    top: 32,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  tripName: {
    position: "absolute",
    bottom: 16,
    left: 16,
    padding: 10
  },
  labelName: {
    color: "darkblue",
    marginRight: 16,
    marginTop: 16,
    padding: 16,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    textDecorationLine: 'underline'
  }
});

export default styles;
