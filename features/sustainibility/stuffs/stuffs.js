import React, { PureComponent } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, ButtonGroup } from "react-native-elements";
import SwiperFlatList from "react-native-swiper-flatlist";
import UserDetails from "./userDetails";
import Question from "./question";
import ThankYou from "./thankyou";

// userDetails will be received from user details form
class Stuffs extends PureComponent {
  // const questions = JSON.parse(
  //   '[{"id":1,"question":"Which uses less water, washing a full load of dishes by hand or in the dishwasher?","options":["By Hand","Dishwasher","None"],"correct_option":1,"desc":"Hand washing dishes can use up to 50 percent more water than a water-saving, energy-efficient dishwasher. However, dishwashers made before 1994 use more water than current models. Look for units with the Energy Star rating."},{"id":2,"question":"Which uses less water, washing a full load of dishes by hand or in the dishwasher?","options":["By Hand","Dishwasher","None"],"correct_option":1,"desc":"Hand washing dishes can use up to 50 percent more water than a water-saving, energy-efficient dishwasher. However, dishwashers made before 1994 use more water than current models. Look for units with the Energy Star rating."}]'
  // );

  state = {
    showQuestionnaire: false,
    showStuffOptions: true,
    selectedIndex: 0,
    showResult: false,
    showThankyou: false,
    userDetails: {
      name: "",
      empId: "",
      answers: [],
      correctAnswers: 0
    },
    questions: JSON.parse(
      '[{"id":1,"question":"Which uses less water, washing a full load of dishes by hand or in the dishwasher?","options":["By Hand","Dishwasher","None"],"correct_option":1,"desc":"Hand washing dishes can use up to 50 percent more water than a water-saving, energy-efficient dishwasher. However, dishwashers made before 1994 use more water than current models. Look for units with the Energy Star rating."},{"id":2,"question":"What type of supermarket bag is more eco-friendly?","options":["Paper","Plastic","None"],"correct_option":2,"desc":"Manufacturing and disposing both paper and plastic harms the environment. Bring your own reusable bags instead."},{"id":3,"question":"Hybrid cars are slower and less safe than conventional cars?","options":["True","False","May be"],"correct_option":1,"desc":"Hybrid cars perform on par with or better than conventional cars in drive ability and safety testing."},{"id":4,"question":"Approximately how much global electricity output is produced from renewable sources?","options":["20 %","1 %","10 %"],"correct_option":2,"desc":"Only about 10 % of global energy comes from renewables. The remaining 92 % comes from non-renewable sources like oil, coal and natural gases."},{"id":5,"question":"It is better to leave a lamp with a compact fluorescent light on than to turn it on and off several times a day?","options":["True","False","May be"],"correct_option":1,"desc":"It is always better to turn lights off when not in use. And there is not additional energy require for starting CFL bulb."},{"id":6,"question":"During a long trip, you conserve more fuel by driving fast and getting to your destination sooner than you do by going the speed limit.","options":["True","False","May be"],"correct_option":1,"desc":"The EPA (Environmental Protection Agency) estimates that you save about 15 % on fuel by driving 88 kmph rather than 105 kmph. Properly inflated tires and well-tune engine also improve fuel economy."},{"id":7,"question":"Which of the following is an alternative material for making paper?","options":["Hemp","Sheepskin","All"],"correct_option":2,"desc":"All of these materials can produce paper. Hemp, the more humane and clean option requires less land to grow than timber and can be recycled more frequently than tree timber."},{"id":8,"question":"It is more eco-friendly to print on both sides of a piece of paper?","options":["True","False","May be"],"correct_option":0,"desc":"Paper largely contributes to the amount of solid waste a country produces. Printing on both sides saves paper, and cuts down your personal paper usage. When you\'re done with whatever you printed, recycle it!"},{"id":9,"question":"What is a key secret to slowing down and eventual turning around the current abuse of our Earth?","options":["Small changes by many","Political Actions","Boycotting Products"],"correct_option":0,"desc":"People need to realize that small changes made by many can make a big impact, if everyone works together to create a green future. Sustainable development should be a goal of any company or individual."},{"id":10,"question":"What is NOT a sustainable practice?","options":["Recycling","Reusing","Buying"],"correct_option":2,"desc":"Recycling and reusing are the sustainable practice, more buying increases more consumption."}]'
    ),
    name: "",
    empId: ""
  };

  onContinuePress = () => {
    this.setState({
      showStuffOptions: true,
      selectedIndex: 0
    });
  };

  baseRender = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../../images/stuff.png")} // TODO::dynamic image
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontSize: 50, fontFamily: "Arial" }}>
          {"Manufacturing on the move"}
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            fontFamily: "Cochin",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {
            "Since 2000, manufacturing low-quality clothing quickly to meet fashion cycles has been on the rise.\nWhile the cost of clothing has decreased, let’s discover the price the planet is paying."
          }
        </Text>

        <Button
          style={{ marginTop: 60 }}
          title={"Continue"}
          onPress={() => this.onContinuePress()}
        />
      </View>
    );
  };

  showStuffOption = () => {
    // return (
    //  );
  };

  setAnswer = (question, isAnswerCorrect) => {
    const userAnswers = this.state.userDetails;
    userAnswers.answers.push("{1,3}");
    userAnswers.correctAnswers = isAnswerCorrect
      ? userAnswers.correctAnswers + 1
      : userAnswers.correctAnswers;
    const showResult =
      userAnswers.answers.length === this.state.questions.length || false;
    this.setState({
      userDetails: userAnswers,
      showResult
    });
  };

  saveAnswer = async () => {
    try {
      AsyncStorage.setItem(
        this.state.empId,
        JSON.stringify(this.state.userDetails)
      );
      this.setState({
        showThankyou: true
      });
    } catch (e) {
      // saving error
    }
  };

  beginQuestionnaire = () => {
    const userAnswers = this.state.userDetails;
    userAnswers.name = this.state.name;
    userAnswers.empId = this.state.empId;
    this.setState({
      showQuestionnaire: true,
      userDetails: userAnswers
    });
  };

  onChangeText = value => {
    this.setState({
      name: value
    });
  };

  onChangeEmpIdText = value => {
    this.setState({
      empId: value
    });
  };

  render() {
    if (this.state.showThankyou) {
      return <ThankYou
      empId={this.state.empId} />;
    }

    if (this.state.showQuestionnaire) {
      return (
        <SwiperFlatList
          autoplay={false}
          autoplayDelay={2}
          autoplayLoop={false}
          index={0}
          showPagination={false}
        >
          {this.state.questions.map(question => {
            return (
              <Question
                question={question}
                setAnswer={this.setAnswer}
                showResult={this.state.showResult}
                saveAnswer={this.saveAnswer}
              />
            );
          })}
        </SwiperFlatList>
      );
    }

    return (
      <UserDetails
        beginQuestionnaire={this.beginQuestionnaire}
        onChangeText={this.onChangeText}
        onChangeEmpIdText={this.onChangeEmpIdText}
        name={this.state.name}
        empId={this.state.empId}
      />
    );
  }
}

export default Stuffs;
