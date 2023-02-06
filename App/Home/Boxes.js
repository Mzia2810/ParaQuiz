/** @format */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
function Boxes({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.secondview}>
        <View style={Style.innerview}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Multiplication")}
          >
            <Text style={Style.textStyle}> Info</Text>
            {/* <Icon name="asterisk" style={Style.iconStl} /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={Style.secondview}>
        <View style={Style.innerview}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SelectTop")}
            // onPress={() => navigation.navigate('Division')}
          >
            <Text style={Style.textStyle}>Start</Text>
            {/* <Icon name="divide" style={Style.iconStl} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Boxes;
const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  iconStl: {
    top: 10,
    alignSelf: "center",
    color: "white",
    fontSize: 30,
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    // height: '30%',
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    marginTop: 40,
  },
  secondview: {
    width: "80%",
    height: "45%",
    padding: 5,
  },
  innerview: {
    flex: 1,
    backgroundColor: "#8c52ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#8c52ff",
    borderWidth: 2,
  },
  text: {
    marginTop: "10%",
    color: "black",
    fontFamily: "fantasy",
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
  },
});
