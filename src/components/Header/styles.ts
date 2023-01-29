import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.primary};
`

export const HeaderContent = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 28px 0;
`

export const CartButton = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  padding-left: 15px;
  cursor: pointer;

  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};

  span {
    font-weight: 700;
    font-size: 18px;
  }
`