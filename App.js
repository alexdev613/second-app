import React from "react";
import { View, Text } from 'react-native';

export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ height: 65,  backgroundColor: "#121212" }}></View>
      
      <View style={{ flex: 1,  backgroundColor: "#DDD" }}>
        <Text>EU SOU UM TEXTO</Text>
      </View>

      <View style={{ height: 65,  backgroundColor: "#121212" }}></View>
    </View>
  )
}
