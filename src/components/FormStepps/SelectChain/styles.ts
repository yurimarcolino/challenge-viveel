import styled from "styled-components";

export const ChainGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding-bottom: 1.87rem;
  gap: 1.5rem;

  .ImageContainer {
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
  }
`;
