/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from "react-native";

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { Header } from "react-native-elements";
import MenuItems from "./features/menuItems/menuItems";
import HelpScreen from "./features/help-screen/app/tablet/help-screen";
import Sustainibility from "./features/sustainibility";
import Stuffs from "./features/sustainibility/stuffs";

const App = () => {

  
  return (
    <View style={{ flex: 1 }}>
      <Stuffs />
    </View>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center"
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
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
