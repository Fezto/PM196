import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = () => {
  return (
    <Text> Hola react native! </Text>
  )
}

export default function App() {
  return (



    <View style={styles.container} >
      <StatusBar style="auto" />
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Button title='PRESIONAME' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
