import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

export class Greeting extends Component {
  render() {
    return <Text>Hello {this.props.name}!</Text>;
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", top: 50 }}>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("HelloWorld", () => LotsOfGreetings);
