import styled from "styled-components";

export const SummaryContainer = styled.section`
  /* Layout */
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  /* Layout */
  padding: 2rem;

  /* Styles */
  background-color: ${(props) => (props.variant === "green" ? props.theme["green-700"] : props.theme["gray-600"])};
  border-radius: 6px;

  & header {
    /* Layout */
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Styles */
    color: ${(props) => props.theme["gray-300"]};
  }

  & strong {
    /* Layout */
    display: block;
    margin-top: 1rem;

    /* Styles */
    font-size: 2rem;
  }
`;
