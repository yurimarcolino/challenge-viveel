import styled from "styled-components";

export const StepperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8rem;
`;
export const StepStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.625rem;
  height: 5.625rem;

  border: 0.3125rem solid ${(props) => props.theme["gray-700"]};
  border-radius: 50%;

  &[aria-current="true"] {
    border: 0.312rem solid ${(props) => props.theme["gray-600"]};
  }
`;
export const StepLabelStyled = styled.div`
  width: 1.25rem;
  height: 3rem;

  font-weight: 600;
  font-size: 2.5rem;
  line-height: 3rem;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) => props.theme["gray-600"]};
`;

export const StepDividerStyled = styled.hr`
  margin: 0 1rem;
  width: 3.125rem;
  height: 0rem;

  border: 0.1875rem solid ${(props) => props.theme["gray-700"]};

  :last-child {
    display: none;
  }
`;
