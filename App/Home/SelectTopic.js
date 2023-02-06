/** @format */

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./Header";
import Boxes from "./Boxes";
import Dropdown from "../Home/Dropdown";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import SwitchButton from "./Switch";
import StartBox from "./StartBox";

function SelectTop({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const data = [
    {
      id: 1,
      text: "Aerodynamic",
      value: false,
    },
    {
      id: 2,
      text: "Flight practice",
      value: false,
    },
    {
      id: 3,
      text: "Legislation",
      value: false,
    },
    {
      id: 4,
      text: "Meteorology",
      value: false,
    },
    {
      id: 5,
      text: "Material sience",
      value: false,
    },
    {
      id: 6,
      text: "Domande Casuali (Random)",
      value: false,
    },
  ];

  const [value, setvalue] = useState(false);
  const [button, setButton] = useState();
  console.log("Vallllllllllah", button);
  const changeStage = () => {
    setvalue(!value);
  };
  return (
    <View style={{ flex: 1 }}>
      {/* <Header /> */}
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, top: "1%" }}>
          <View style={{ marginHorizontal: 20, marginTop: 30 }}>
            {data.map((item) => {
              const changeStage = () => {
                item.value = true;
                console.log("===================");
                console.log(data);
                data.map((item) => {
                  setButton(item.value);
                });
              };
              return (
                <SwitchButton
                  text={item.text}
                  changeStage={changeStage}
                  value={item.value}
                />
              );
            })}
          </View>
          {/* <View
            style={{
              width: 360,
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            <SwitchButton text="Domande Casuali (Random)" para="On/Off" />
          </View> */}
          {/* <View style={{height:400,backgroundColor:'pink'}}> */}
          {button == "false" ? (
            <StartBox navigation={navigation} disabled={true} />
          ) : (
            <StartBox navigation={navigation} />
          )}
          {/* </View> */}
        </View>
      </View>
    </View>
  );
}
export default SelectTop;
