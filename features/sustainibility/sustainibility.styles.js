import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  },
  columnContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  },
  child: {
    height: 200,
    width: 200,
    justifyContent: "center",
    resizeMode: "stretch"
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center"
  }
});

export default styles;
