import React from "react";
import { View } from "react-native";

const Row: React.FC = ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);
export default Row;