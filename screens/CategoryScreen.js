import React from "react";

import { FlatList } from "react-native";

//import data
import { CATEGORIES } from "../data/dummy-data";

//import from components
import CategoryGridTile from "./../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoryScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoryScreen;
