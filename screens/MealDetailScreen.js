import { View, Text, Image, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "./../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.text}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text style={styles.text}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return <Text key={ingredient}> {ingredient}</Text>;
      })}
      <Text style={styles.text}> Steps</Text>
      {selectedMeal.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
