import {StyleSheet} from 'react-native'

export default styles =StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-between"
    },
    wrapperLogoTripPlanner: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 50
    },
    wrapperLogoDevpleno: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      paddingBottom: 32
    },
    buttonBackground: {
      backgroundColor: "white",
      paddingBottom: 16,
      paddingTop: 16
    },
    buttonText: {
      textAlign: "center",
      fontSize: 18
    },
    pin: {
        marginTop: 16,
        marginBottom: 16
    },
    arrow: {
        marginTop: 16,
        marginBottom: 16
    },
    buttonEmptyStateBackground: {
      backgroundColor: "white",
      paddingBottom: 16,
      paddingTop: 16,
      alignItems: 'center'
    },
    buttonEmptyStateText: {
      textAlign: "center",
      fontSize: 18,
      width: 240
    },
  });