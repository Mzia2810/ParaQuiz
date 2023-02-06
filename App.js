/** @format */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Multiplication from "./App/Quizzes/Multiplication/screens/Quiz";
import Division from "./App/Quizzes/Division/screens/Quiz";
import HomeScreen from "./App/Home/Home";
import SelectTop from './App/Home/SelectTopic'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Multiplication" component={Multiplication} />
        <Stack.Screen name="Division" component={Division} />
        <Stack.Screen name="SelectTop" options={{title:'Select top'}} component={SelectTop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
