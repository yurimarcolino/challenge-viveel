import styled from "styled-components";

export const ButtonContainer = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    margin: 2.5rem 0 1.875rem 0;
    background: rgba(255, 255, 255, 0.02);

    height: 2.25rem;
    width: 100%;
    min-width: 18.2rem;
    max-width: 42.5rem;

    border: 0;
    border-radius: 1.25rem;

    font-size: 0.812rem;
    color: ${(props) => props.theme.white};

    &:hover {
      opacity: 0.7;
    }
  }
`;
