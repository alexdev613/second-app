import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {
  const [ nome, setNome] = useState("");
  const [input, setInput] = useState("");

  function entrar() {
    
    if (input === "") {
      alert("Digite seu nome!");
      setNome("")
      return;
    }

    setNome(input);
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome"
        onChangeText={ (texto) => setInput(texto) }
      />

      <Button title="Entrar" onPress={ entrar } />

      <Text style={styles.texto}> {nome} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 15
  }
});
