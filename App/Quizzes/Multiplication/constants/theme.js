import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#252c4a",
    secondary: '#1E90FF',
    accent: '#3498db',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#252C4A",
    mainview: '#f8f8ff',
  secondview: '#d3d3d3',
  borderColor: '#8c52ff',

  shadowColor: '#8c52ff',
}


export const SIZES = {
    base: 10,
    width,
    height
}