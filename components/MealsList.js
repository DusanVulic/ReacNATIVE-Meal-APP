import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ items }) => {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
