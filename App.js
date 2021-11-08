import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const MyComponent = () => {
  const [altura, setAltura] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [resultado, setResultado] = React.useState(0);
  const [RTexto, setRTexto] = React.useState('');


  async function calculaIMC(p, h) {
    setResultado(p / ((parseFloat(h) / 100) * (parseFloat(h) / 100)));
    if (p > 0 && h > 0) {
      if (resultado < 18.5) {
        setRTexto("Considerado como: Abaixo do Peso");
      } else if (resultado >= 18.5 && resultado <= 24.9) {
        setRTexto("Considerado como: Peso Normal");
      } else if (resultado >= 25 && resultado <= 29.9) {
        setRTexto("Considerado como: Sobrepeso");
      } else if (resultado >= 30 && resultado <= 34.9) {
        setRTexto("Considerado como: Obesidade Grau I");
      } else if (resultado >= 35 && resultado <= 39.9) {
        setRTexto("Considerado como: Obesidade Grau II");
      } else if (resultado >= 40) {
        setRTexto("Considerado como: Obesidade Grau III ou Mórbida");
      }
    } else {
      setResultado(0)
      setRTexto("Preencha os valores corretamente!")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        autoCapitalize="none"
        label="Altura(cm)"
        textAlign="center"
        keyboardType="numeric"
        activeOutlineColor="orange"
        value={altura}
        onChangeText={text => setAltura(text)}
        style={styles.input}
      />

      <TextInput
        mode="outlined"
        label="Peso(kg)"
        autoCapitalize="none"
        keyboardType="numeric"
        activeOutlineColor="orange"
        value={peso}
        onChangeText={peso => setPeso(peso)}
        style={styles.input}
      />
      <Button style={styles.button} mode="contained" color="orange" onPress={() => calculaIMC(peso, altura)}>
        CALCULAR
      </Button>

      <View style={styles.result}>
        <Text>Seu IMC é: {resultado.toFixed(2)}</Text>
        <Text>{RTexto}</Text>
      </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",

  },
  input: {
    height: 50,
    fontSize: 20,
    margin: 5
  },
  button: {
    marginTop: 10,
    width: "75%",
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
  },
  result: {
    marginTop: 10,
    alignItems: "center",
  }
});
