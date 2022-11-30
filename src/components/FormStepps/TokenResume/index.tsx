import { useFormContext } from "../../../hooks/useFormContext";
import { SvgIcon } from "../../SvgIcon";
import { TokenResumeContainer } from "./styles";

import Ethereum from "../../../assets/ethereum.svg";
import Binance from "../../../assets/binance.svg";
import Polygon from "../../../assets/polygon.svg";
import Cardano from "../../../assets/cardano.svg";
import Avalanche from "../../../assets/avalanche.svg";
import Tron from "../../../assets/tron.svg";
import Network1 from "../../../assets/network1.svg";
import Network2 from "../../../assets/network2.svg";
import Network3 from "../../../assets/network3.svg";

export function TokenResume() {
  const { data } = useFormContext();

  const chainGroupImages: Record<string, any> = {
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

  const svg = Object.entries(chainGroupImages);

  return (
    <TokenResumeContainer>
      <header>
        <h1>Token resume</h1>
      </header>

      <div className="BodyContainer">
        <div className="SpanContainer">
          <p>Template:</p>
        </div>
        <div className="LabelContainer">
          <label />
        </div>
      </div>
      <div className="BodyContainer">
        <div className="SpanContainer">
          <p>Name:</p>
        </div>
        <div className="LabelContainer">
          <label>{data.tokenName}</label>
        </div>
      </div>
      <div className="BodyContainer">
        <div className="SpanContainer">
          <p>Symbol:</p>
        </div>
        <div className="LabelContainer">
          <label>{data.tokenSymbol}</label>
        </div>
      </div>

      <div className="BodyContainer">
        <div className="SpanContainer">
          <p>Symbol:</p>
        </div>
        <div className="LabelContainer">
          <label>distribution</label>
        </div>
      </div>

      <div className="BodyContainer">
        <div className="SpanContainer">
          <p>BlockChains:</p>
        </div>
        <div className="LabelContainer">
          <label>
            {data.chains.map((chain, index) => {
              console.log(chain);
              return (
                <SvgIcon
                  key={index}
                  iconName={chain}
                  svgProp={{ width: 50, height: 50, fill: "#61dafb" }}
                />
              );
            })}
          </label>
        </div>
      </div>

      <div className="BuildButton">
        <button onClick={() => alert("🎉🎉🎉🎉🎉")}>Build {">"}</button>
      </div>
    </TokenResumeContainer>
  );
}
