import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./sustainibility.styles";

class Sustainibility extends Component {
  state = {};
  render() {
    const items = [
      {
        name: "ENERGY",
        // code: COLORS.PRIMARY_BG,
        img: require("../../images/energy.png"),

        backgroundColor: "#CEEAD6"
      },
      {
        name: "FOOD",
        // code: COLORS.PRIMARY_BG,
        img: require("../../images/food.png"),
        backgroundColor: "#CEEAD6"
      },
      {
        name: "WATER",
        // code: COLORS.PRIMARY_BG,
        img: require("../../images/water.png"),
        backgroundColor: "#CEEAD6"
      },
      {
        name: "STUFF",
        // code: COLORS.PRIMARY_BG,
        img: require("../../images/stuff.png"),
        backgroundColor: "#CEEAD6"
      }
    ];
    return (
      <View style={{ flex: 1 , margin: 100}}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* stuff */}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
                height: 200,
                backgroundColor: "#ceead6",
                borderRadius: 125
              }}
            >
              <Image
                source={require("../../images/stuff_new.png")} // TODO::dynamic image
                style={{ width: 300, height: 300 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* water */}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
                height: 200,
                backgroundColor: "#D2E3FC",
                borderRadius: 125
              }}
            >
              <Image
                source={require("../../images/water_new.png")} // TODO::dynamic image
                style={{ width: 250, height: 250 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* stuff */}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
                height: 200,
                backgroundColor: "#FCF6DF",
                borderRadius: 125
              }}
            >
              <Image
                source={require("../../images/energy_new.png")} // TODO::dynamic image
                style={{ width: 300, height: 300 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* stuff */}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
                height: 200,
                backgroundColor: "#F8D2CE",
                borderRadius: 125
              }}
            >
              <Image
                source={require("../../images/food_new.png")} // TODO::dynamic image
                style={{ width: 200, height: 200 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{ fontSize: 50, fontFamily: "CormorantGaramond-Italic" }}
          >
            {"Your Plan,\n     Your Planet"}
          </Text>
        </View>
      </View>
    );
  }
}

export default Sustainibility;
