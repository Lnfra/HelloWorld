import React, { Component } from "react";
import { View } from "react-native";
import FetchExample from "./components/FetchExample/FetchExample";

export default class HelloWorldApp extends Component {
  render() {
    const homePageStyle = {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    };

    return <FetchExample />;
  }
}
