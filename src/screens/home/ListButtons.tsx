import React from "react";
import { StyleSheet, View } from "react-native";

import Row from "../../components/common/Row";
import Button from "../../components/common/Button";

import { ListButtonsTypes } from "./types";

const ListButtons: React.FC<ListButtonsTypes> = ({ listButtons, handlePress }) => {
  return (
    <View>
      {listButtons.map((buttonArray, key) =>
        <Row key={key}>
          {buttonArray.map((button, index) =>
            <Button
              key={`${key}_${index}`}
              text={button.name}
              color={button.color}
              size={button.size}
              onPress={() => handlePress(button.type, button.value)}
            />
          )}
        </Row>)}
    </View>
  );
};

export default ListButtons;