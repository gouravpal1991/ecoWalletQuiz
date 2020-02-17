import React, { PureComponent } from "react";
import { Text, Dimensions, Image, StyleSheet, View } from "react-native";


export default class SwiperItem extends PureComponent {
  render() {
    const { img } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.child}
          source={{
            uri: img
          }}
        />

        {/* view for arrow starts here */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center"
          }}
        >
          <Image
            style={{ height: 100, width: 100 }}
            source={{
              uri: img
            }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <Image
            style={{ height: 100, width: 100 }}
            source={{
              uri: img
            }}
          />
        </View>

        {/* view for arrow end here */}

        {/* top view */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
           
            alignItems: "center"
          }}
        >
          <Image
            style={{ height: 100, width: 100 }}
            source={{
              uri: img
            }}
          />
        </View>
        {/* bottom view */}

        <View
          style={{
            position: "absolute",
           
            left: 0,
            right: 0,
            bottom: 0,
           justifyContent:'center',
            alignItems: "center"
          }}
        >
          <Image
            style={{ height: 100, width: 100 }}
            source={{
              uri: img
            }}
          />
        </View>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  child: {
    height,
    width,
    justifyContent: "center"
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center"
  }
});
