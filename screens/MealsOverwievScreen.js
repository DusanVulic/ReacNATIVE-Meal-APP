import { MEALS } from "../data/dummy-data";

import { View, Text, StyleSheet } from "react-native";

const MealsOverwievScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverwievScreen</Text>
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
