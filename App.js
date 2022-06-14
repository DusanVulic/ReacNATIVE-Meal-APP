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
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{ title: "All categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverwievScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
