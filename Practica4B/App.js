import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState('Hola')
  const actualizaTexto = () => setContenido('State modificado')
  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}> {contenido} </Text>
  )
}

export default function App() {

  const [titulo, setTitulo] = useState('default')
  const actualizaBtn = () => setTitulo("tócame, presióname, pusheame!!!")

  return (
    <View style={styles.container} >
      <StatusBar style="auto" />
      <Texto style={styles.orange}></Texto>
      <Texto style={styles.purple}></Texto>
      <Texto style={styles.yellow}></Texto>
      <Button onPress={actualizaBtn} title={titulo} />
    </View>
  );
}

// .
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'green',
    fontSize: 28,
    width: 100,
    height: 100
  },

  orange: {backgroundColor: 'orange'},
  purple: {backgroundColor: 'purple'},
  yellow: {backgroundColor: 'yellow'}
});
