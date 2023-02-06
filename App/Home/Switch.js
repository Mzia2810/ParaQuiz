/** @format */

import React, { useState } from "react";
import { View, Switch, Text } from "react-native";

const SwitchButton = ({ text, para, changeStage, value }) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    changeStage();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 20 }}>{text} </Text>
        <Text style={{ fontSize: 20 }}> {para}</Text>
      </View>
      <Switch
        //   style={{width:250}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#8c52ff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchButton;
