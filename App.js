import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

export default function App() {
  let nome = "Alex Nascimento";
  let img = "https://sujeitoprogramador.com/reactlogo.png";

  return (
    <View>
      <Text style={{ marginTop: 25 }}>Olá Mundo</Text>
      <Text style={{ color: "#FF0000", fontSize: 25, margin: 15 }} >Meu segundo App</Text>
      <Text style={{ fontSize: 18, color: "green", }} >Sujeito Programador</Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: img }}
      />

      <Text style={{ fontSize: 19 }}>{nome}</Text>
    </View>
  )
}

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Olá Mundo!!!</Text>
//       </View>
//     )
//   }
// }