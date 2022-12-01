import styled from "styled-components";

export const TokenResumeContainer = styled.div`
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

  .BodyContainer {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .SpanContainer {
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
  }

  .LabelContainer {
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
  }

  .BuildButton {
    display: flex;
    justify-content: flex-end;

    margin-top: 2.5rem;

    button {
      font-size: 1.5rem;
      line-height: 1.81rem;
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
`;
