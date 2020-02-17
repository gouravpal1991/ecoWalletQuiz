import React, { Component } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from "react-native-elements";
import RNRestart from "react-native-restart";

class ThankYou extends Component {
  constructor(props) {
    super(props);
    this.state = { correctAnswers: 0 };
  }

  async componentDidMount() {
    const userDetails = await AsyncStorage.getItem(this.props.empId);
    const parsedData = JSON.parse(userDetails);
    this.setState({
      correctAnswers: parsedData.correctAnswers
    });
  }

  render() {
    const percentage = this.state.correctAnswers * 10;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Text style={{ fontSize: 25, margin: 40 }}>Your Score is</Text>
        <AnimatedCircularProgress
          size={250}
          width={50}
          fill={percentage}
          tintColor={this.state.correctAnswers < 7 ? "#FF5733" : "#5DD363"}
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        >
          {fill => (
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              {percentage}%
            </Text>
          )}
        </AnimatedCircularProgress>

        <Button
          style={{ marginTop: 20, width: 150 }}
          title={"START OVER!"}
          onPress={() => {
            RNRestart.Restart();
          }}
        />
      </View>
    );
  }
}

export default ThankYou;
