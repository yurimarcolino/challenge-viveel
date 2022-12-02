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

  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;

  &[aria-current="true"] {
    border: 5px solid rgba(255, 255, 255, 0.5);
  }
`;
export const StepLabelStyled = styled.div`
  width: 20px;
  height: 48px;

  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(255, 255, 255, 0.5);
`;

export const StepDividerStyled = styled.hr`
  margin: 0 1rem;
  width: 50px;
  height: 0px;

  border: 3px solid rgba(255, 255, 255, 0.3);

  :last-child {
    display: none;
  }
`;
