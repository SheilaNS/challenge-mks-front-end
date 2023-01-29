import styled from "styled-components";

export const FooterContainer = styled.header`
  width: 100vw;
  height: 34px;
  background-color: ${(props) => props.theme["gray-100"]};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterContent = styled.div`
  p {
    font-size: 12px;
  }
`