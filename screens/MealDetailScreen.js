import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "./../components/MealDetails";

// layout from react
import { useLayoutEffect } from "react";
import { IconButton } from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("button pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>

          {selectedMeal.ingredients.map((ingredient) => {
            return (
              <Text key={ingredient} style={styles.smallText}>
                {ingredient}
              </Text>
            );
          })}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}> Steps</Text>
          </View>

          {selectedMeal.steps.map((step) => {
            return (
              <Text key={step} style={styles.smallText}>
                {step}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 4,
    color: "white",
    textAlign: "center",
  },
  detailText: { color: "white" },
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginHorizontal: 24,
    marginVertical: 2,
    padding: 6,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },

  smallText: {
    marginHorizontal: 24,
    color: "white",
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
