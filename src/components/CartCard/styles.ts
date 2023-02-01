import styled from "styled-components";

export const CartCardContainer = styled.div`
  background: ${(props) => props.theme.white};
  width: 385px;
  height: 101px;
  border: 0;
  border-radius: 8px;
  margin: 36px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  .cart-product-image {
    width: 50px;
    object-fit: cover;
    height: 60px;
  }

  .cart-card-qtd-container {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px) {
    margin: 32px auto;
    width: 250px;
    height: 220px;
    flex-direction: column;

    .cart-card-image-container {
      margin-top: 22px;
      display: flex;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cart-product-image {
      width: 80px;
      height: 90px;
    }

    .cart-card-qtd-container {
      width: 221px;
      height: 35px;
    }
  }
`;

export const RemoveItemButton = styled.button`
  position: relative;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  cursor: pointer;
  right: -22px;
  top: -50px;

  @media only screen and (max-width: 768px) {
    right: -108px;
    top: -195px;
    background: transparent;
    color: ${(props) => props.theme.black};
    width: 25px;
    height: 25px;
    padding: 0;
    margin: 0;
  }
`;

export const ProductName = styled.h1`
  font-size: 13px;
  font-weight: 400;
  width: 113px;
  height: 33px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 22px;
    width: 221px;
    font-size: 16px;
    justify-content: center;
  }
`;

export const ProductQuantity = styled.div`
  .cart-product-quantity-control {
    height: 19px;
    width: 50px;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart-quantity-text {
    font-size: 5px;
    font-weight: 400;
    margin-bottom: 4px;
  }

  .cart-product-quantity {
    font-size: 10px;
  }

  .cart-product-quantity-button {
    height: 19px;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.black};
    display: flex;
    align-items: center;
    padding: 0 3px;
  }

  .right {
    border-left: 1px solid #bfbfbf;
  }

  .left {
    border-right: 1px solid #bfbfbf;
  }

  @media only screen and (max-width: 768px) {
    width: 98px;

    .cart-quantity-text {
      display: none;
      margin: 0;
    }

    .cart-product-quantity-control {
      width: 98px;
      height: 35px;
      margin: 0;
    }

    .cart-product-quantity {
      font-size: 20px;
    }

    .cart-product-quantity-button {
      width: 32px;
      height: 18px;
      justify-content: center;
      margin-top: 4px;
    }
  }
`;
export const ProductPrice = styled.h2`
  font-size: 14px;
  font-weight: 700;
  width: 80px;
  text-align: right;

  @media only screen and (max-width: 768px) {
    height: 35px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`;
