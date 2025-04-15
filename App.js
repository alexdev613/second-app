import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function App() {
  let name = "Alex Nascimento";

  const [nome, setNome] = useState("Alex");
  const [idade, setIdade] = useState(20);

  function entrar(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }

  return (
    <View style={styles.area}>
      <Button title="Mudar nome" onPress={() => entrar("Alex Nascimento!", 37)} />

      <Text style={[styles.titulo, styles.textoAlinhado, { marginTop: 15 } ]} >Meu segundo App</Text>
      <Text style={[styles.subTitulo, styles.textoAlinhado]} >Olá Mundo!</Text>
      
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

const styles = StyleSheet.create({
  area: {
    marginTop: 60
  },
  titulo: {
    fontSize: 20,
    color: "#FF0456"
  },
  subTitulo: {
    color: "#2200FF",
    fontSize: 17,
    marginTop: 8,
    marginBottom: 15
  },
  textoAlinhado: {
    textAlign: 'center'
  }
})