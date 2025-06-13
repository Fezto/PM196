import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const { children } = props
  return (
    <Text> {children} </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container} >
      <StatusBar style="auto" />
      <Texto> Hola</Texto>
      <Texto> Mundooo </Texto>
      <Texto> React Native </Texto>
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
