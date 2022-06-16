import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

//import screens
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverwievScreen from "./screens/MealsOverwievScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

// import of a NAVIGATION CONTAINER
import { NavigationContainer } from "@react-navigation/native";

//import to create stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import function to create drawer
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";

//import icons

import { Ionicons } from "@expo/vector-icons";

// CONTEXT PROVIDER !!
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "black" },
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoryScreen}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavouriteScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "black" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverwievScreen}
            />
            <Stack.Screen name="meal detail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
