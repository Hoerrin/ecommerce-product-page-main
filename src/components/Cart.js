import React from "react";
import styled from "styled-components";
import { CartContext } from "../helpers/CartContext";
import useComponentVisible from "../helpers/UseComponentVisible";
import { ReactComponent as IconCart } from "../images/icon-cart.svg";
import { ReactComponent as IconBin } from "../images/icon-delete.svg";

const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const CartButton = styled(IconCart)`
  fill: ${(props) => props.theme.darkGrayishBlue};
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.veryDarkBlue};
  }
`;

const CartWindow = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  min-height: 16rem;
  min-width: 22rem;
  transform: translate(0, 3rem);
  background-color: ${(props) => props.theme.white};
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 1rem 2rem 0px rgb(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1rem 2rem 0px rgb(0, 0, 0, 0.2);
  box-shadow: 0px 1rem 2rem 0px rgb(0, 0, 0, 0.2);
`;

const Header = styled.h2`
  text-align: left;
  width: 100%;
  font-size: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.lightGrayishBlue};
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  flex: 1;
  width: 100%;
  padding: 2rem 1.4rem;
`;

const ItemsList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  color: ${(props) => props.theme.darkGrayishBlue};
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
`;

const Thumbnail = styled.img`
  height: 100%;
  width: auto;
  border-radius: 0.2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  height: 100%;
  margin: 0 1rem;
`;

const FinalPrice = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.black};
`;

const Bin = styled(IconBin)`
  cursor: pointer;
`;

const EmptyCartText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CheckoutButton = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 1rem;
  padding: 1.1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  &:hover {
    opacity: 0.6;
  }
`;

function Cart() {
  //Custom hook that detects click outside of a component and manages its visibility
  const { isComponentVisible, setIsComponentVisible, ref } =
    useComponentVisible(false);

  return (
    <CartContainer>
      <CartButton onClick={() => setIsComponentVisible(true)} />
      {isComponentVisible && (
        <CartWindow ref={ref}>
          <Header>Cart</Header>
          <Body>
            <CartContext.Consumer>
              {({ items, removeItem }) =>
                Object.values(items)[0] ? (
                  <>
                    <ItemsList>
                      {Object.values(items).map((item) => (
                        <Item key={item.product.id}>
                          <Thumbnail
                            src={item.product.images[0].thumbnail}
                            alt=""
                          />
                          <InfoContainer>
                            <p>{item.product.name}</p>
                            <div>
                              <span>
                                ${item.product.priceAfterDiscount.toFixed(2)} x{" "}
                                {item.quantity}
                              </span>
                              <FinalPrice>
                                {" "}
                                $
                                {(
                                  item.product.priceAfterDiscount *
                                  item.quantity
                                ).toFixed(2)}
                              </FinalPrice>
                            </div>
                          </InfoContainer>
                          <Bin onClick={() => removeItem(item.product.id)} />
                        </Item>
                      ))}
                    </ItemsList>
                    <CheckoutButton>Checkout</CheckoutButton>
                  </>
                ) : (
                  <EmptyCartText>Your cart is empty</EmptyCartText>
                )
              }
            </CartContext.Consumer>
          </Body>
        </CartWindow>
      )}
    </CartContainer>
  );
}

export default Cart;
