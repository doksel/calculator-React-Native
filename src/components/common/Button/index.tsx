import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { PropsTypes } from "./types";

const screen = Dimensions.get("window");
let buttonWidth = screen.width / 4;

const Button: React.FC<PropsTypes> = ({ text = "", onPress, color = "#434343", colorText = "#fff", size }) => {
  if (size === "double") {
    buttonWidth = screen.width / 2
  } else {
    buttonWidth = screen.width / 4
  };

  return <TouchableOpacity onPress={onPress} style={[styles.wrapButton, { backgroundColor: color }, size ? styles.buttonDouble : undefined]}>
    {text === "z"
      ? <Text style={[styles.text, { color: colorText }]}>&#x00F7;</Text>
      : <Text style={[styles.text, { color: colorText }]}>{text}</Text>
    }
  </TouchableOpacity>
}


export default Button;

const styles = StyleSheet.create({
  wrapButton: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700"
  }
});
