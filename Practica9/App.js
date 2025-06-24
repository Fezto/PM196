import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const showAlert = () => {
    if (!nombre || !email || !password) {
      if (Platform.OS === "web")
        window.alert("Por favor, completa todos los campos obligatorios");
      else
        Alert.alert(
          "Error",
          "Por favor, complete todos los campos obligatorios",
          [{ text: "Okay" }]
        );
    } else {
      if (Platform.OS === "web") {
        window.alert(`Registro exitoso \nNombre: ${nombre}\nEmail: ${email}`);
        cleanForm();
      } else {
        Alert.alert("Registro exitoso", `Nombre: ${nombre}\nEmail: ${email}`, [
          { text: "ok", onPress: () => limpiarFormulario },
        ]);
      }
    }
  };

  const cleanForm = () => {
    setNombre("");
    setEmail("");
    setPassword("");
    setTelephone("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Registro de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre Completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono (opcional)"
          value={telephone}
          onChangeText={setTelephone}
          keyboardType="phone-pad"
        />

        <Button title="Registrarse" onPress={showAlert}></Button>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  form: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});
