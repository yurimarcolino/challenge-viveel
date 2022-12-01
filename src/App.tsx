import { Steps } from "./components/Steps";
import { StepContextProvider } from "./context/StepContext";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StepContextProvider>
        <Steps />
      </StepContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
