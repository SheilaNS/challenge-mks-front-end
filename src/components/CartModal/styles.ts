import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
`;

export const Title = styled(Dialog.Title)`
  color: ${(props) => props.theme.white};
  width: 170px;
  margin-top: 36px;
  margin-left: 40px;
  font-weight: 700;
  margin-bottom: 70px;
  font-size: 27px;
`

export const Content = styled(Dialog.Content)`
  width: 485px;
  height: 100vh;

  background: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;
  padding-bottom: 200px;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: ${(props) => props.theme.black};
  border: 0;
  border-radius: 100%;
  width: 38px;
  height: 38px;
  top: 39px;
  right: 22px;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.white};
`;

export const TotalContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
  bottom: 97px;
  width: 485px;
  background: ${(props) => props.theme.primary};

  p {
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 28px;
  }
`

export const CheckoutButton = styled.button`
  width: 485px;
  height: 97px;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 28px;
  border: 0;
  cursor: pointer;
  position: fixed;
  bottom: 0;
`