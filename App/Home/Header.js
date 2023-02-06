import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Header() {
  return (
    <View style={Style.header}>
      <Icon name="home" size={40} color={'white'} />
      <Text style={Style.text}>Home</Text>
    </View>
  );
}

export default Header;
const Style = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8c52ff',
    flexDirection: 'row',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 33,
    fontFamily: 'fantasy',
    color: 'white',
    padding: 10,
  },
});
