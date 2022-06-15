import { MEALS, CATEGORIES } from "../data/dummy-data";

import { useLayoutEffect } from "react";

import { View, FlatList, StyleSheet } from "react-native";
//import component
import MealItem from "../components/MealItem";

const MealsOverwievScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    return (
      <View>
        <MealItem
          id={itemData.item.id}
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverwievScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
