import React from "react";

export const items = {};

export const CartContext = React.createContext({
  items: items,
  addItem: () => {},
  removeItem: () => {},
});
