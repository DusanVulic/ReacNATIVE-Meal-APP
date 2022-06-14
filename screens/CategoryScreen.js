import { FlatList } from "react-native";

//import data
import { CATEGORIES } from "../data/dummy-data";

//import from components
import CategoryGridTile from "./../components/CategoryGridTile";

const CategoryScreen = ({ navigation }) => {
  // function that create single piece of flatlist
  const renderCategoryItem = (itemData) => {
    const presHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={presHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
