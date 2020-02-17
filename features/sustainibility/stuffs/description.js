import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class Description extends Component {
  state = {};

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {this.props.description && (
          <View
            style={{
              borderRadius: 10,
              borderColor: "#7EC893",
              backgroundColor: "#CEEAD6",
              borderWidth: 1,
              padding: 20,
              marginTop: 20,
              maxWidth: 600
            }}
          >
            <Text style={{ fontSize: 15 }}>{this.props.description}</Text>
          </View>
        )}
        {this.props.showResult && (
          <Button
            style={{ marginTop: 20, width: 150 }}
            title={"SHOW RESULT"}
            onPress={() => this.props.saveAnswer()}
          />
        )}
      </View>
    );
  }
}

export default Description;
