import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import ListButtons from "./ListButtons";

import { AppDispatchTypes } from "../../services/store";
import { listButtons } from "../../services/helpers/values";
import { calculator } from "../../services/redux/calculator"
import { CalculatorTypes, HandlePressTypes } from "../../typing/calculator";

type RootState = {
  calculator: CalculatorTypes;
};

const Home: React.FC = () => {
  const dispatch: AppDispatchTypes = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const display = useTypedSelector(state => state.calculator.display);
  const result = useTypedSelector(state => state.calculator.result);
  const memory = useTypedSelector(state => state.calculator.memory);

  const handlePress: HandlePressTypes = (type, value) => {
    dispatch(calculator(type, value))
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.text}>{display}</Text>
      </View>

      <View style={styles.calculation}>
        <Text style={styles.text}>{result}</Text>
      </View>

      <ListButtons listButtons={listButtons} handlePress={handlePress} />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 1,
    alignItems: "flex-end",
  },
  calculation: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "700"
  }
});

export default Home;