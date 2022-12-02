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

export const chainGroupImages: Record<string, any> = {
  ethereum: "/src/assets/ethereum.svg",
  binance: "/src/assets/binance.svg",
  polygon: "/src/assets/polygon.svg",
  avalanche: "/src/assets/avalanche.svg",
  cardano: "/src/assets/cardano.svg",
  tron: "/src/assets/tron.svg",
  network1: "/src/assets/network1.svg",
  network2: "/src/assets/network2.svg",
  network3: "/src/assets/network3.svg",
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
