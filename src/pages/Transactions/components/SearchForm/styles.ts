import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  /* Layout */
  display: flex;
  gap: 1rem;

  input {
    /* Layout */
    flex: 1;
    padding: 1rem;

    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    /* Layout */
    display: flex;
    align-items: center;
    gap: 0.75rem;

    /* Styles */
    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    color: ${(props) => props.theme["green-300"]};

    &:hover {
      background-color: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

  }

`;
