import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsIds((currFavIds) => [...currFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealsIds((currFavIds) =>
      currFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavoritesContextProvider;
