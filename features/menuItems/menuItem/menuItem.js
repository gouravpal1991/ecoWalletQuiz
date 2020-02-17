import React, { PureComponent } from "react";
import { ImageBackground, View } from "react-native";
import {
  Card,
  Text,
  Button,
  Icon,
  Avatar,
  Image,
  Badge
} from "react-native-elements";
import styles from "./menuItem.styles";

class MenuItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          containerStyle={styles.imgContainer}
          style={styles.imgContainer}
          source={require("../../../images/food.jpg")}
        >
          <Badge
            value={"Food of the day"}
            status="success"
            containerStyle={{ position: "absolute", top: 10, left: 10 }}
          />
        </ImageBackground>

        <Text style={{ marginTop: 5 }}>$15.98</Text>
        <Text style={{ marginTop: 5, marginBottom: 5 }}>
          Koku Ramen (Port Ration)
          <Icon name="g-translate" color="#00aced" />
        </Text>

        <Button buttonStyle={{ width: 100, marginTop: 20 }} title="Add" />
      </View>
    );
  }
}

export default MenuItem;
