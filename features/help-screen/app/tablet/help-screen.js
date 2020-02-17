import React, { PureComponent } from "react";
import { Text, Dimensions, Image, StyleSheet, View } from "react-native";

import SwiperFlatList from "react-native-swiper-flatlist";
import SwiperItem from "./swiper-item/swiper-item";

export default class HelpScreen extends PureComponent {
  render() {
    const images = [
      "https://thumbs.dreamstime.com/z/handsome-mature-man-gesturing-hands-showing-big-large-size-sign-measure-symbol-measuring-concept-handsome-mature-man-123487278.jpg",
      "https://media.gettyimages.com/photos/female-fingers-indicating-small-size-picture-id87883856?s=2048x2048",
      "https://thumbs.dreamstime.com/z/handsome-mature-man-gesturing-hands-showing-big-large-size-sign-measure-symbol-measuring-concept-handsome-mature-man-123487278.jpg",
      "https://media.gettyimages.com/photos/female-fingers-indicating-small-size-picture-id87883856?s=2048x2048",
      "https://thumbs.dreamstime.com/z/handsome-mature-man-gesturing-hands-showing-big-large-size-sign-measure-symbol-measuring-concept-handsome-mature-man-123487278.jpg",
      "https://media.gettyimages.com/photos/female-fingers-indicating-small-size-picture-id87883856?s=2048x2048",
      "https://thumbs.dreamstime.com/z/handsome-mature-man-gesturing-hands-showing-big-large-size-sign-measure-symbol-measuring-concept-handsome-mature-man-123487278.jpg",
      "https://media.gettyimages.com/photos/female-fingers-indicating-small-size-picture-id87883856?s=2048x2048",
      "https://thumbs.dreamstime.com/z/handsome-mature-man-gesturing-hands-showing-big-large-size-sign-measure-symbol-measuring-concept-handsome-mature-man-123487278.jpg",
      "https://media.gettyimages.com/photos/female-fingers-indicating-small-size-picture-id87883856?s=2048x2048"
    ];
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay={false}
          autoplayDelay={2}
          autoplayLoop={false}
          index={0}
          showPagination={false}
        >
          {images.map(img => {
            return <SwiperItem img={img} />;
          })}
        </SwiperFlatList>
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
    height: height * 1,
    width,
    justifyContent: "center",
    resizeMode: "stretch"
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center"
  }
});
