import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0.00);
  const [RTexto, setRTexto] = useState("Digite os valores corretamente");

  async function calculaIMC() {
    setResultado(peso / (altura * altura));

    if (resultado < 18.5) {
      setRTexto("Abaixo do Peso");
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setRTexto("Peso Normal");
    } else if (resultado >= 25 && resultado <= 29.9) {
      setRTexto("Sobrepeso");
    } else if (resultado >= 30 && resultado <= 34.9) {
      setRTexto("Obesidade Grau I");
    } else if (resultado >= 35 && resultado <= 39.9) {
      setRTexto("Obesidade Grau II");
    } else if (resultado >= 40) {
      setRTexto("Obesidade Grau III ou Mórbida");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          autoCapitalize="none"
          placeholder="Peso:"
          keyboardType="numeric"
          value={peso}
          onChangeText={text => setPeso(parseFloat(text))}
          style={styles.input}
        />

        <TextInput
          autoCapitalize="none"
          placeholder="Altura:"
          keyboardType="numeric"
          value={altura}
          onChangeText={text => setAltura(parseFloat(text))}
          style={styles.input}
        />
      </View>
      <Button style={styles.botao} title="Calcular" onPress={() => calculaIMC()} />
      <Text style={styles.resultado}>{resultado.toFixed(2)}</Text>
      <Text style={styles.resultado}>{RTexto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  entrada: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 50,
    textAlign: "center",
    width: "95%",
    fontSize: 25,
    marginTop: 10,
    borderWidth: 1
  },
  resultado: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 0
  },
  botao: {
    backgroundColor: "#00008B",
    width: "95%",
  }
});
