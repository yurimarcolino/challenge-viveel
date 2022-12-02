import styled from "styled-components";

export const StepFooterStyled = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  font-size: 0.875rem;
  color: ${(props) => props.theme["gray-500"]};
  line-height: 1.25rem;
`;
