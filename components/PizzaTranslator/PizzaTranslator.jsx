import React, { Component } from "react";
import { AppRegistry, Text, TextInput, View } from "react-native";

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleTextChange = text => this.setState({ text });
  handleSubmit = () => this.setState({ text: "submited" });

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate this!"
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.handleSubmit}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("HelloWorld", () => PizzaTranslator);
