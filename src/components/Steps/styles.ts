import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 0.8rem 0;

  span {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 16px;
    padding: 0.6rem;
  }

  input {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.3);
    color: ${(props) => props.theme.white};

    height: 2.5rem;
    width: 100%;
    min-width: 18.2rem;
    max-width: 42.5rem;

    border-radius: 1.25rem;
    border: 1px solid ${(props) => props.theme.white};
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  p {
    color: red;
    margin: 1rem;
    font-size: 0.65rem;
  }
`;

export const FormContainer = styled.div`
  margin: 14.187rem auto;
  padding: 2rem;
  max-width: 42.5rem;
`;

export const FormContent = styled.div`
  .ButtonContainer {
    display: flex;
    justify-content: flex-end;

    button {
      border: 0;
      background: transparent;
      color: ${(props) => props.theme["gray-400"]};
      font-size: 1.5rem;
      margin-bottom: 4.375rem;
      margin-top: 1rem;

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
