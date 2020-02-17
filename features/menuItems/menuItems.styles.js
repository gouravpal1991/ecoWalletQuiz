import { StyleSheet } from "react-native";
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

export default styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    padding:20
  },
  welcome: {
    fontFamily: "sacramento",
    fontSize: 120,
    color: "#FAFF6C",
    textAlign: "center",
    margin: 10
  },
  description: {
    fontFamily: "CormorantGaramond-BoldItalic",
    fontSize: 120,
    color: "#FFFFFF",
    textAlign: "center"
  },
  container:{
      padding: 20
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  }
});
