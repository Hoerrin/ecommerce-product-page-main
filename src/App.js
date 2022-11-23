import styled, { ThemeProvider } from "styled-components";
import ProductPage from "./pages/ProductPage";
import ProductImage1 from "./images/image-product-1.jpg";
import ProductImage1Tn from "./images/image-product-1-thumbnail.jpg";
import ProductImage2 from "./images/image-product-2.jpg";
import ProductImage2Tn from "./images/image-product-2-thumbnail.jpg";
import ProductImage3 from "./images/image-product-3.jpg";
import ProductImage3Tn from "./images/image-product-3-thumbnail.jpg";
import ProductImage4 from "./images/image-product-4.jpg";
import ProductImage4Tn from "./images/image-product-4-thumbnail.jpg";
import React, { useEffect, useState } from "react";
import { CartContext } from "./helpers/CartContext";

const theme = {
  orange: "hsl(26, 100%, 55%)",
  paleOrange: "hsl(25, 100%, 94%)",
  veryDarkBlue: "hsl(220, 13%, 13%)",
  darkGrayishBlue: "hsl(219, 9%, 45%)",
  grayishBlue: "hsl(220, 14%, 75%)",
  lightGrayishBlue: "hsl(223, 64%, 98%)",
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 0%)",
};

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  max-width: 2560px;
  height: 100vh;
  max-height: 100vh;
  padding: 0rem 10rem;
  margin: auto;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

//Object that contains all available products
//-------------------------------------------
const Products = [
  {
    id: 2212412,
    name: "Fall Limited Edition Sneakers",
    company: "Sneaker Company",
    description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they'll withstand everything the
  weather can offer.`,
    price: 250.0,
    isDiscounted: true,
    priceAfterDiscount: 125.0,
    itemsinStock: 7,
    images: [
      { fullSize: ProductImage1, thumbnail: ProductImage1Tn },
      { fullSize: ProductImage2, thumbnail: ProductImage2Tn },
      { fullSize: ProductImage3, thumbnail: ProductImage3Tn },
      { fullSize: ProductImage4, thumbnail: ProductImage4Tn },
    ],
  },
];
//-------------------------------------------

function App() {
  const addItem = (product, quantity) => {
    setCart((prev) => {
      const newQuantity = () => {
        if (prev.items[product.id]) {
          return prev.items[product.id].quantity + quantity <=
            product.itemsinStock
            ? prev.items[product.id].quantity + quantity
            : product.itemsinStock;
        } else {
          return quantity;
        }
      };
      const newState = { ...prev };

      newState.items[product.id] = {
        product: product,
        quantity: newQuantity(),
      };

      return newState;
    });
  };

  const removeItem = (id) =>
    setCart((prev) => {
      const newState = { ...prev };
      console.log(newState.items[id])
      delete newState.items[id];

      return newState;
    });

  const [cart, setCart] = useState({
    items: {},
    addItem: addItem,
    removeItem: removeItem,
  });

  useEffect(() => {
    let cartFromStorage = JSON.parse(localStorage.getItem("cart"));

    if (!cartFromStorage) {
      localStorage.setItem("cart", JSON.stringify({}));
      cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    }

    setCart((cart) => {
      return { ...cart, items: cartFromStorage };
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.items));
  }, [cart]);

  return (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cart}>
        <AppContainer>
          <ProductPage product={Products[0]} />
        </AppContainer>
      </CartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
