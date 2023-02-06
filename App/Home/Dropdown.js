import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Example = () => {
  const [selectedValue, setSelectedValue] = React.useState('java');

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="javascript" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C++" value="cplusplus" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:300,
    height:20,
    borderWidth:2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: 300,
    backgroundColor:'red'
  },
});

export default Example;
