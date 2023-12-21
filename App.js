import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NotFoundScreen from "./screens/NotFound";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: "home",
      Settings: "settings",
      NotFound: "*",
    },
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//For testing deep links
// npx uri-scheme open exp://10.0.0.27:19000/--/home --android
// npx uri-scheme open exp://10.0.0.27:19000/--/whatever --android
// npx uri-scheme open exp://10.0.0.27:19000/--/settings --android
