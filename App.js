import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//import screens
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverwievScreen from "./screens/MealsOverwievScreen";

// import of a NAVIGATION CONTAINER
import { NavigationContainer } from "@react-navigation/native";

//import to create stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoryScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverwievScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
