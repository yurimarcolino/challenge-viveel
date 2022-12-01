import { Form } from "./components/Form";
import { StepContextProvider } from "./context/StepContext";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StepContextProvider>
        <Form />
      </StepContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
