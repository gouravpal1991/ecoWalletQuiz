import React, { Component } from "react";
import { Text, Image, TouchableOpacity, View, Dimensions } from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import Description from "./description";
const { width, height } = Dimensions.get("window");

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      disableOptions: false,
      showNext: false,
      isAnswerCorrect: false
    };
  }

  updateIndex = selectedIndex => {
    const ques = this.props.question;
    const isAnswerCorrect = selectedIndex === ques.correct_option || false;
    this.setState({
      selectedIndex,
      disableOptions: true,
      showNext: true,
      isAnswerCorrect
    });
    this.props.setAnswer(this.props.question, isAnswerCorrect);
  };

  render() {
    const ques = this.props.question;
    const buttons = ques.options;
    const { selectedIndex } = this.state;

    return (
      <View
        style={{
          height,
          justifyContent: "center",
          alignItems: "center",
          width,
          backgroundColor: "#CEEAD6"
        }}
      >
        <Text style={{ fontSize: 25, textAlign: "center",maxWidth: 700 }}>
          {ques.question}
        </Text>
        <Image
          source={require("../../../images/energy.png")} // TODO::dynamic image
          style={{ width: 300, height: 300 }}
        />

        <ButtonGroup
          disabled={this.state.disableOptions}
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            width: 500,
            height: 130,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#95000000",
            borderColor: "#95000000"
          }}
          buttonStyle={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 130,
            height: 130,
            backgroundColor: "#ffffff",
            borderRadius: 125,
            textAlign:'center'
          }}
          
          selectedButtonStyle={{ backgroundColor: "#000000" }}
          disabledSelectedStyle={
            this.state.isAnswerCorrect
              ? { backgroundColor: "#66BB55" }
              : { backgroundColor: "#DF3B2F" }
          }
          disabledTextStyle={{color:'#fff'}}
        />
        {this.state.showNext && <Description description={ques.desc} showResult={this.props.showResult} saveAnswer={this.props.saveAnswer}/>}
      </View>
    );
  }
}

export default Question;
