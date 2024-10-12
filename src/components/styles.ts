import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  /* Layout */
  padding: 2.5rem 0 7.5rem;

  /* Styles */
  background-color: ${(props) => props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  /* Layout */
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  /* Layout */
  height: 50px;
  padding: 0 1.25rem;
  
  
  /* Styles */
  border: 0;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.9);
    transition: filter 0.2s;
  }
`;
