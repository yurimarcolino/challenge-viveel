import { useStepContext } from "../../../context/StepContext";
import { HeaderStyled } from "../../StepTitle";
import { StepFooterStyled } from "../../StepFooter";
import { useAddNetwork } from "../../../hooks/AddNetwork";
import {
  ButtonContainerStyled,
  ChainGroupContainerStyled,
  ErrorStyled,
  ImageContainerStyled,
} from "../styles";

import ethereum from "../../../assets/ethereum.svg";
import binance from "../../../assets/binance.svg";
import polygon from "../../../assets/polygon.svg";
import avalanche from "../../../assets/avalanche.svg";
import cardano from "../../../assets/cardano.svg";
import tron from "../../../assets/tron.svg";
import network1 from "../../../assets/network1.svg";
import network2 from "../../../assets/network2.svg";
import network3 from "../../../assets/ethereum.svg";

export const chainGroupImages: Record<string, any> = {
  ethereum: ethereum,
  binance: binance,
  polygon: polygon,
  avalanche: avalanche,
  cardano: cardano,
  tron: tron,
  network1: network1,
  network2: network2,
  network3: network3,
};

export function SelectChain() {
  const { AddNetwork, error, setError } = useAddNetwork();

  const { data, setHasFinished } = useStepContext();

  const images = Object.values(chainGroupImages);

  function handleNextButtonClick() {
    if (data.chains.length === 0) {
      setError(true);
    } else {
      setHasFinished(true);
    }
  }

  return (
    <>
      <HeaderStyled>Select Chain</HeaderStyled>
      <ChainGroupContainerStyled>
        {images.map((image, index) => {
          return (
            <ImageContainerStyled key={index}>
              <input
                id="imageCheckbox"
                type="checkbox"
                onChange={() => AddNetwork(image)}
              />
              <label htmlFor="imageCheckbox">
                <img src={image} />
              </label>
            </ImageContainerStyled>
          );
        })}
      </ChainGroupContainerStyled>
      {error && <ErrorStyled>You must select at least one network</ErrorStyled>}

      <ButtonContainerStyled>
        <button type="button" onClick={handleNextButtonClick}>
          Next {">"}
        </button>
      </ButtonContainerStyled>

      <StepFooterStyled>
        Now it is time to select which Blockchain you want to use. Select as
        many as you want.
      </StepFooterStyled>
    </>
  );
}
