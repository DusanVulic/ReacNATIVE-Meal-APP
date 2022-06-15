import { View, Text, StyleSheet } from "react-native";

const FavouriteScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Favourite Screen </Text>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    padding: 32,
  },
});
