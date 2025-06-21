import { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const App = () => {
  const [activo, setActivo] = useState(false);

  const cambiarSwitch = () => {
    setActivo((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Ser anotado en la death note del está bien:
      </Text>

      <Switch
        onValueChange={cambiarSwitch}
        value={activo}
        trackColor={{ false: "#B00020", true: "#4CAF50" }}
        thumbColor={activo ? "#1E88E5" : "#FFEB3B"}
      />

      <Text style={styles.statusText}>
        Estado actual: {activo ? "Activado" : "Desactivado"}
      </Text>
    </View>
  );
};

// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8EAF6",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#1A237E",
  },
  statusText: {
    marginTop: 20,
    fontSize: 18,
    color: "#455A64",
  },
});

export default App;
