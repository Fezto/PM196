import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Home from "./screens/home";
import Profile from "./screens/profile";
import Settings from "./screens/settings";

const Tab = createBottomTabNavigator();

export default function App() {
  // Incorporamos el safeareaview porque los tabs se veían debajo de los
  // botónes de home y retroceso de mi celular
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                  case "Home":
                    iconName = "home";
                    break;
                  case "Profile":
                    iconName = "person";
                    break;
                  case "Settings":
                    iconName = "settings";
                    break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#007BFF",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: {
                paddingBottom: 5,
                height: 60,
                elevation: 0,
                borderTopWidth: 0,
              },
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
