import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 42.5rem;
`;

export const FormContent = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 2.5rem;
  }

  .ButtonContainer {
    display: flex;
    justify-content: flex-end;

    button {
      border: 0;
      background: transparent;
      color: ${(props) => props.theme["gray-400"]};
      font-size: 1.5rem;
      margin-bottom: 4.375rem;

      &:hover {
        opacity: 0.7;
      }
    }
  }
  .FooterContainer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    footer {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-500"]};
      line-height: 20px;
    }
  }
`;
