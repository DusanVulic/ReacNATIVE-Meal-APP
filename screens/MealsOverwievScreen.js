import { MEALS } from "../data/dummy-data";

import { View, FlatList, StyleSheet } from "react-native";
//import component
import MealItem from "../components/MealItem";

const MealsOverwievScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    return (
      <View>
        <MealItem title={itemData.item.title} />
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
