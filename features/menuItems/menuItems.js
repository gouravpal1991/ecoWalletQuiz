import React, { PureComponent } from "react";
import { ImageBackground, View } from "react-native";
import { Card, Text, Button, Icon, Avatar, Image } from "react-native-elements";
import { SectionGrid } from 'react-native-super-grid';
import MenuItem from "./menuItem";
import styles from "./menuItems.styles";

class menuItems extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
   
      <SectionGrid
        itemDimension={350}
        staticDimension={300}
        // fixed
        spacing={20}
        sections={[
          {
            title: 'Title1',
            data: [],
          },
          {
            title: 'Title2',
            data: [],
          },
          {
            title: 'Title3',
            data: [],
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
           <Text>{section.title}</Text>
        )}
      />
    );
  }
}

export default menuItems;
