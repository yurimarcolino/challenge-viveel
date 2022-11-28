import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 3.75rem 0 1.87rem 0;

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
`;
