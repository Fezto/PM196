import { View, Text, StyleSheet } from "react-native";
// cambié todos las importaciones de los icons directamente a expo!
// (como ya estaban en el app.js)
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="home-outline" size={28} color="red" />
        <Text style={styles.title}>Bienvenidos a la pantalla principal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconRow: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "red",
  },
});
