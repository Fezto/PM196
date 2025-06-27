import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Switch,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";

export default function App() {
  const backgroundImage = require("./assets/image_background.jpg");
  const logo = require("./assets/logo.jpg");
  const toggleSwitch = () => setTos((previousTos) => !tos);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tos, setTos] = useState(false);
  const [load, setLoad] = useState(true);

  const register = () => {
    if (email.trim() === "" || name.trim() === "" || !tos) {
      Alert.alert(
        "ERROR!",
        "Falta llenar todos los campos o los términos de servicio..."
      );
      return;
    }

    Alert.alert(
      "ÉXITO",
      `Felicidades, has creado tu cuenta!\nEmail: ${email}\nNombre: ${name}`
    );
  };

  useEffect(() => {
    setTimeout(() => setLoad(false), 5000);
  });

  if (load) {
    return (
      <View style={styles.load}>
        <Image source={logo}></Image>
        <Text style={styles.text}>Cargando...</Text>
        <ActivityIndicator size="large" color="black"></ActivityIndicator>
      </View>
    );
  }
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>TU CARTA ASTRAL</Text>
        <View style={styles.container}>
          <Text style={styles.text}>¡Ingresa tus datos!</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Completo..."
            value={name}
            onChangeText={setName}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Tu Correo..."
            value={email}
            onChangeText={setEmail}
          ></TextInput>
          <View style={styles.switchContainer}>
            <Text>Acepto los Términos y Condiciones</Text>
            <Switch value={tos} onValueChange={toggleSwitch}></Switch>
          </View>
          <Button title="Ver mi carta astral :)" onPress={register}></Button>
          <StatusBar style="auto" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(19, 18, 18, 0.62)",
  },
  load: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 50,
    marginTop: 20,
    marginBottom: 100,
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.62)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 50,
  },
  title: {
    marginTop: 100,
    fontSize: 80,
    color: "white",
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgba(168, 164, 164, 0.62)",
    fontSize: 20,
    marginBottom: 10,
    color: "black",
    borderRadius: 5,
    width: "90%",
    borderWidth: 2,
    borderColor: "white",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
});
