import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Header from "./Header";
import Boxes from "./Boxes";
import Dropdown from "../Home/Dropdown";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, top: "1%" }}>
          <Image
            source={require("../../assets/favicon-512x512.png")}
            style={{ width: 300, height: 300,margin:10,alignSelf:'center' }}
          />
          <TouchableOpacity
         
            style={{
              width: 300,
              height: 60,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "black",
              alignSelf: "center",
              // marginTop:200,
              marginVertical:50,
            }}
          >
            <Picker
              ref={pickerRef}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="English" value="English" />
              <Picker.Item label="Italian" value="Italiano" />
            </Picker>
          </TouchableOpacity>

          <Boxes navigation={navigation} />
        </View>
      </View>
    </View>
  );
}
export default Home;
