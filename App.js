import React, { useState, Component } from "react";
import { View, Text, Image, Button } from 'react-native';

export default function App() {
  let name = "Alex Nascimento";

  const [nome, setNome] = useState("Alex");
  const [idade, setIdade] = useState(20);

  function entrar(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }

  return (
    <View style={{ marginTop: 25 }}>
      <Button title="Mudar nome" onPress={() => entrar("Alex Nascimento!", 37)} />

      <Text style={{ color: "#FF0000", fontSize: 25, margin: 10 }} >Meu segundo App - Olá Mundo!</Text>
      
      <Text style={{ fontSize: 18, color: "green", }} >Nome alterável: {nome}</Text>
      <Text style={{ fontSize: 19, color: "blue", }} >Idade alterável: {idade}</Text>

      <Logo largura={350} altura={350} fulano={name} profissao="Programador" />

    </View>
  )
}

function Logo(props) {
  let img = "https://sujeitoprogramador.com/reactlogo.png";

  return (
    <View style={{ marginTop: 30}}>
      <Text>-----------------------------------------------------------------------------------</Text>
      <Text style={{ fontSize: 25, fontWeight: "bold" }} >COMPONENTE LOGO:</Text>
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