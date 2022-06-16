import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavouriteScreen = () => {
  const favoriteMealsCtx = useContext(FavouritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    padding: 32,
  },
});
