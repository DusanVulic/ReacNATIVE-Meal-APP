import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text style={styles.text}>Meal Detail Screen : {mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
