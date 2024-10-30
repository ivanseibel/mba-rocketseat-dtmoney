import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  /* Layout */
  min-width: 32rem;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Styles */
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-800"]};

  form {
    /* Layout */
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      /* Layout */
      padding: 1rem;

      /* Styles */
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      /* Layout */
      height: 58px;
      margin-top: 1.5rem;
      padding: 1rem;

      /* Styles */
      border: 0;
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  /* Layout */
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  /* Styles */
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
  line-height: 0;

  &:hover {
    color: ${(props) => props.theme["gray-100"]};
    transition: color 0.2s;
  }
`;
