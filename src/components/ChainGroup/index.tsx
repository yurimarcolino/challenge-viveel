import { ImgHTMLAttributes } from "react";
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

interface ChainGroupProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function ChainGroup({ ...rest }: ChainGroupProps) {
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

  function toggleAddNetwork(key: string) {
    const checkField = data.chains?.find((chain) => chain === key);

    const newChain = data.chains?.filter((chain) => chain !== checkField);

    if (!checkField) {
      setData((oldState) => ({
        ...oldState,
        chains: [...oldState.chains, key],
      }));
    } else {
      setData((oldState) => ({
        ...oldState,
        chains: newChain,
      }));
    }
  }

  return (
    <>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => toggleAddNetwork(image[0])}
            />
            <img src={image[1].type} {...rest} />
          </div>
        );
      })}
    </>
  );
}
