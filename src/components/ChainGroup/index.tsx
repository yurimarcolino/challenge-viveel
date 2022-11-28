import Ethereum from "../../assets/Ethereum.svg";
import Binance from "../../assets/Binance.svg";
import Polygon from "../../assets/Polygon.svg";
import Cardano from "../../assets/Cardano.svg";
import Avalanche from "../../assets/Avalanche.svg";
import Tron from "../../assets/Tron.svg";
import Network1 from "../../assets/7.svg";
import Network2 from "../../assets/8.svg";
import Network3 from "../../assets/9.svg";
import { useFormContext } from "../../hooks/useFormContext";
import { ChainGroupContainer } from "./styles";
import { useState } from "react";

export function ChainGroup() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const { data, setData } = useFormContext();

  const ChainGroupImages: Record<string, any> = {
    ethereum: <Ethereum />,
    binance: <Binance />,
    polygon: <Polygon />,
    avalanche: <Avalanche />,
    cardano: <Cardano />,
    tron: <Tron />,
    network1: <Network1 />,
    network2: <Network2 />,
    network3: <Network3 />,
  };

  const images = Object.entries(ChainGroupImages);

  function AddNetwork(key: string) {
    //refactor
    const checkField = data.chains?.find((chain) => chain === key);

    if (!checkField) {
      setError(false);
      setChecked(true);
      setData((prevState) => ({
        ...prevState,
        chains: [...prevState.chains, key],
      }));
    } else {
      const newChain = data.chains?.filter((chain) => chain !== checkField);

      if (newChain.length === 0) {
        setChecked(false);
      }
      setData((prevState) => ({
        ...prevState,
        chains: newChain,
      }));
    }
  }

  function handleNextButtonClick() {
    if (data.chains.length === 0) {
      setError(true);
    } else {
      alert("navigate");
    }
  }

  return (
    <>
      <ChainGroupContainer>
        {images.map((image, index) => {
          return (
            <div className="ImageContainer" key={index}>
              <input
                id="myCheckbox"
                type="checkbox"
                onChange={() => AddNetwork(image[0])}
              />
              <label htmlFor="myCheckbox">
                <img src={image[1].type} />
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
    </>
  );
}
