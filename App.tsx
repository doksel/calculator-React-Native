import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import store from "./src/services/store";
import Main from "./src/index"

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
});
