import { useStepContext } from "../../../context/StepContext";
import { ChainGroupContainer } from "./styles";
import { HeaderStyled } from "../../StepTitle";
import { StepFooterStyled } from "../../StepFooter";
import { useAddNetwork } from "../../../hooks/AddNetwork";

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

  const { data, setData, setHasFinished } = useStepContext();

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
      <ChainGroupContainer>
        {images.map((image, index) => {
          return (
            <div className="ImageContainer" key={index}>
              <input
                id="myCheckbox"
                type="checkbox"
                onChange={() => AddNetwork(image)}
              />
              <label htmlFor="myCheckbox">
                <img src={image} />
              </label>
            </div>
          );
        })}
      </ChainGroupContainer>
      {error && (
        <p style={{ color: "red", fontSize: "0.65rem", margin: "1rem" }}>
          You must select at least one network
        </p>
      )}

      <div className="ButtonContainer">
        <button type="button" onClick={handleNextButtonClick}>
          Next {">"}
        </button>
      </div>

      <StepFooterStyled>
        Now it is time to select which Blockchain you want to use. Select as
        many as you want.
      </StepFooterStyled>
    </>
  );
}
