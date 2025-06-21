import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Platform } from "react-native";
import { useState } from "react";

const showAlert = (message) => {
  if ((Platform.OS = "web")) {
    window.alert(message);
  } else {
    Alert.alert("ALERTA", message);
  }
};

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola");
  const actualizaTexto = () => setContenido("State modificado");
  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}>
      {" "}
      {contenido}{" "}
    </Text>
  );
};

export default function App() {
  const [titulo, setTitulo] = useState("default");
  const actualizaBtn = () => setTitulo("tócame, presióname, pusheame!!!");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Button Test</Text>

      <View style={styles.section}>
        <Text style={styles.description}>Botón Básico</Text>
        <Button
          title="Presióname"
          onPress={() => showAlert("Botón Presionado")}
        ></Button>
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón con Color</Text>
        <Button
          title="Botón de Color"
          color="#f194ff"
          onPress={() => showAlert("Botón de Color Presionado")}
        ></Button>
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón Deshabilitado</Text>
        <Button
          title="Botón Deshabilitado"
          disabled={true}
          onPress={() => showAlert("Botón de Color Presionado")}
        ></Button>
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Dos Botones</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Izquierda"
            onPress={() => showAlert("Botón Izquierdo!")}
          ></Button>
          <Button
            title="Derecha"
            onPress={() => showAlert("Botón Derecho!")}
          ></Button>
        </View>
      </View>
    </View>
  );
}

// .
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
  },

  text: {
    color: "red",
    fontSize: 27,
    width: 200,
    height: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "black",
  },

  section: {
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333333",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonSpace: {
    width: 10,
  },
});
