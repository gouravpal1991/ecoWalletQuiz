import React, { Component } from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import UserItem from "./userItem";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", empId: "", list: [] };
    this.importData = this.importData.bind(this);
    const that = this;
  }

  componentDidMount() {
    const data = this.importData();
  }

  async importData() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);

      const list = result.map(res => {
        return JSON.parse(res[1]);
      });

      this.setState({
        list: list
      });
    } catch (error) {
      console.error(error);
    }
  }

  renderItem = ({ item }) => <UserItem item={item} />;

  render() {
    // const list = [1, 2, 3];
    // const list = this.importData();
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#CEEAD6"
        }}
      >
        <View
          style={{
            flex: 1,

            flexDirection: "column",
            backgroundColor: "#CEEAD6",
            padding: 20
          }}
        >
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 40 }}>{"Champions Board"}</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, borderRadius: 10 }}
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={this.renderItem}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#CEEAD6"
          }}
        >
          <View
            style={{
              padding: 40,
              backgroundColor: "white",
              width: 400,
              borderRadius: 10
            }}
          >
            <Text style={{width:'100%', textAlign:'center', marginBottom: 20, fontSize: 25}}>{"EcoWallet Quiz"}</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                height: 40,
                fontSize: 18,
                padding: 5,
                maxWidth: 350
              }}
              onChangeText={text => this.props.onChangeText(text)}
              value={this.props.name}
              placeholder={"Full Name"}
              autoCorrect={false}
            />
            <TextInput
              style={{
                marginTop: 20,
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                height: 40,
                fontSize: 18,
                padding: 5,
                maxWidth: 350
              }}
              onChangeText={text => this.props.onChangeEmpIdText(text)}
              placeholder={"Employee Id"}
              value={this.props.empId}
              autoCorrect={false}
            />
            <Button
              style={{ marginTop: 20,  fontSize: 15 }}
              title={"Let's Get Started"}
              onPress={() => this.props.beginQuestionnaire()}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default UserDetails;
