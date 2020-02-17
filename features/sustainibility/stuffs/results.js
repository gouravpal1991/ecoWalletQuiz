import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { correctAnswers:0 };
    }

  componentDidMount() {
const userDetails=   AsyncStorage.getItem('8411897'); 
const parsedData = JSON.parse(userDetails);
this.setState({
    correctAnswers:parsedData.correctAnswers
})
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 25 }}>
          Your Score is {this.state.correctAnswers}
        </Text>
      </View>
    );
  }
}

export default Results;
