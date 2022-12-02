import styled from "styled-components";

export const InputContainerStyled = styled.div`
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
`;

export const ErrorStyled = styled.p`
  color: red;
  margin-top: 1rem;
  font-size: 0.65rem;
`;

export const StepContainerStyled = styled.div`
  margin: 14.187rem auto;
  padding: 2rem;
  max-width: 42.5rem;
`;

export const ButtonContainerStyled = styled.div`
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
`;

export const FormContainerStyled = styled.div`
  display: flex;
  gap: 2rem;
  flex-flow: nowrap;
`;

export const ChainGroupContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding-bottom: 1.87rem;
  gap: 1.5rem;
`;

export const ImageContainerStyled = styled.div`
  position: relative;
  height: 100px;
  width: 100px;

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    height: 80px;
    width: 80px;
    float: left;
    left: 10px;
    top: 15px;
    cursor: pointer;
  }

  input:checked + label {
    border: 3px solid #1976d2;
    border-radius: 100%;
  }
`;

export const TokenResumeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 43.75rem;
  max-height: 41.16rem;

  margin: 14.187rem auto;
  padding: 0.62rem;
  gap: 0.6rem;

  h1 {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3.75rem;
  }
`;

export const BodyContainerStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpanContainerStyled = styled.div`
  width: 20.31rem;
  display: flex;
  gap: 1.875rem;
  justify-content: flex-end;

  p {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: ${(props) => props.theme.white};
  }
`;

export const LabelContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  min-height: 2.75rem;
  max-height: 13.125rem;
  width: 20.31rem;

  background: rgba(255, 255, 255, 0.02);
  border-radius: 1.5rem;
  margin-left: 1.875rem;

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    gap: 0.8rem;
    padding: 0.6rem;
  }
`;
