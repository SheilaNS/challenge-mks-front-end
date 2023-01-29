import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 218px;
  height: 285px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);

  p {
    font-size: 10px;
    font-weight: 300;
    margin: 8px 14px 12px;
  }
`;

export const ImageContainer = styled.div`
  height: 138px;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    object-fit: contain;
    height: 138px;
  }
`;

export const ProductTitle = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 14px;

  h3 {
    font-size: 16px;
    font-weight: 400;
    padding-right: 6px;
  }

  span {
    height: 26px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 6px;
    border-radius: 5px;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 45px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 18px;
  }
`;

