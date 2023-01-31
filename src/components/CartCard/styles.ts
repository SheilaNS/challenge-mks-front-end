import styled from "styled-components";

export const CartCardContainer = styled.div`
  background: ${(props) => props.theme.white};
  width: 385px;
  height: 101px;
  border: 0;
  border-radius: 8px;
  margin-bottom: 22px;
  margin-top: 36px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 50px;
    object-fit: contain;
    height: 60px;
  }
`

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
`

export const ProductName = styled.h1`
  font-size: 13px;
  font-weight: 400;
  width: 113px;
  height: 33px;
  display: flex;
  align-items: center;
`
export const ProductQuantity = styled.div`
  width: 50px;
  height: 29px;
  
  > div {
    border: 1px solid #BFBFBF;
    border-radius: 4px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 5px;
    font-weight: 400;
    margin-bottom: 4px;
  }

  span {
    font-size: 10px;
  }

  button {
    height: 19px;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.black};
    display: flex;
    align-items: center;
    padding: 0 3px;
}
`
export const ProductPrice = styled.h2`
  font-size: 14px;
  font-weight: 700;
  width: 80px;
  text-align: right;
`