import React, { Component } from "react";
import { View, Text } from "react-native";
import { Divider, Image, ListItem, Icon } from "react-native-elements";

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStatus = score => {
    let img = null;
    if (score <= 3) {
      return require("../../../images/red.png");
    }

    if (score > 3 && score <= 7) {
      return require("../../../images/amber.png");
    }

    if (score > 7) {
      return require("../../../images/green.png");
    }
  };

  render() {
    const data = this.props.item;
    return (
      <ListItem
        title={data.name}
        subtitle={data.empId}
        badge={{
          value: data.correctAnswers,
          badgeStyle:{backgroundColor:'#434343',padding:5, width: 40, height: 40},
          textStyle: { color: "white", fontSize: 15 },
          
        }}
        bottomDivider
        // leftIcon={{ name: 'award', type:'font-awesome', color:'red'}}
        leftIcon={() => (
          <Image
            source={this.getStatus(data.correctAnswers)} // TODO::dynamic image
            style={{ width: 26, height: 26 }}
          />
        )}
      />
    );
  }
}

export default UserItem;
