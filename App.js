import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

export default function App() {
  let nome = "Alex Nascimento";

  return (
    <View>
      <Text style={{ marginTop: 25 }}>Olá Mundo</Text>
      <Text style={{ color: "#FF0000", fontSize: 25, margin: 15 }} >Meu segundo App</Text>
      <Text style={{ fontSize: 18, color: "green", }} >Sujeito Programador</Text>

      <Logo largura={350} altura={350} fulano={nome} profissao="Programador" />

    </View>
  )
}

function Logo(props) {
  let img = "https://sujeitoprogramador.com/reactlogo.png";

  return (
    <View>
      <Image source={{ uri: img }} style={{ width: props.largura, height: props.altura }} />
      <Text style={{ fontSize: 19, fontWeight: "bold" }}>{props.fulano} - {props.profissao}.</Text>
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