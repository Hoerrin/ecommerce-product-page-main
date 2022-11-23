import React, { useState } from "react";
import styled from "styled-components";
import { CartContext } from "../helpers/CartContext";
import { ReactComponent as CartSVG } from "../images/icon-cart.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

const Company = styled.h2`
  color: ${(props) => props.theme.orange};
  font-size: 0.9rem;
`;

const Name = styled.h1`
  color: ${(props) => props.theme.veryDarkBlue};
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 2.1rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.darkGrayishBlue};
  line-height: 1.6rem;

  @media only screen and (max-width: 1024px) {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const PriceContainer = styled.div`
  margin: 1.8rem 0 2.3rem 0;

  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.8rem 0;
  }
`;

const ProductPrice = styled.p`
  color: ${(props) => props.theme.veryDarkBlue};
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-weight: 700;
  margin-right: 1rem;
`;

const PriceContainerTop = styled.div`
  display: flex;
  margin-bottom: 0.7rem;

  @media only screen and (max-width: 1024px) {
    margin: 0;
  }
`;

const DiscountPercent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.6rem;
  border-radius: 0.3rem;
  font-weight: 700;
  background-color: ${(props) => props.theme.paleOrange};
  color: ${(props) => props.theme.orange};
`;

const PriceBeforeDiscount = styled.p`
  color: ${(props) => props.theme.grayishBlue};
  font-weight: 700;
  text-decoration: line-through;
`;

const BuyForm = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3.6fr 6.4fr;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.veryDarkBlue};
  background-color: ${(props) => props.theme.lightGrayishBlue};
`;

const QuantityButton = styled.img`
  padding: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const IconCart = styled(CartSVG)`
  fill: ${(props) => props.theme.white};
  margin-right: 1rem;
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  padding: 1.1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  -webkit-box-shadow: 0px 2rem 2rem 0px ${(props) => props.theme.paleOrange};
  -moz-box-shadow: 0px 2rem 2rem 0px ${(props) => props.theme.paleOrange};
  box-shadow: 0px 2rem 2rem 0px ${(props) => props.theme.paleOrange};
  &:hover {
    opacity: 0.6;
  }
`;

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Company>{product.company.toUpperCase()}</Company>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <PriceContainer>
        <PriceContainerTop>
          <ProductPrice>${product.priceAfterDiscount.toFixed(2)}</ProductPrice>
          <DiscountPercent>50%</DiscountPercent>
        </PriceContainerTop>
        <PriceBeforeDiscount>${product.price.toFixed(2)}</PriceBeforeDiscount>
      </PriceContainer>
      <CartContext.Consumer>
        {({ addItem }) => (
          <BuyForm>
            <QuantityContainer>
              <QuantityButton
                src={iconMinus}
                alt="Quantity plus"
                onClick={() =>
                  quantity - 1 > 0 && setQuantity((prev) => prev - 1)
                }
              />
              {quantity}
              <QuantityButton
                src={iconPlus}
                alt="Quantity minus"
                onClick={() =>
                  quantity + 1 <= product.itemsinStock &&
                  setQuantity((prev) => prev + 1)
                }
              />
            </QuantityContainer>
            <Submit onClick={() => addItem(product, quantity)}>
              <IconCart /> Add to cart
            </Submit>
          </BuyForm>
        )}
      </CartContext.Consumer>
    </div>
  );
}

export default ProductInfo;
