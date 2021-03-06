import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tripPrice: {
    position: "absolute",
    bottom: 16,
    right: 32,
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
    height: "40%",
  },
  headerImage: {
    alignItems: 'stretch',
    height: "100%",
    resizeMode: 'contain'
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 36,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  tripName: {
    position: "absolute",
    top: 26,
    left: 16,
    padding: 10
  },
  labelTripName: {
    backgroundColor: "blue",
    color: "white",
    padding: 16,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  wrapperLabelTrip: { paddingTop: 16 },
  input: {
    backgroundColor: "#E5E5E5",
    padding: 16,
    margin: 16
  },
  btn: {
    backgroundColor: "#E5E5E5",
    padding: 16,
    margin: 16,
    textAlign: "center"
  }
});

export default styles;
