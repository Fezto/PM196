import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState('Hola')
  const actualizaTexto = () => setContenido('State modificado')
  return (
    <Text onPress={actualizaTexto}> {contenido} </Text>
  )
}

export default function App() {

  const [titulo, setTitulo] = useState('default')
  const actualizaBtn = () => setTitulo("tócame, presióname, pusheame!!!")

  return (
    <View style={styles.container} >
      <StatusBar style="auto" />
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Button onPress={actualizaBtn} title={titulo} />
    </View>
  );
}

// .
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
