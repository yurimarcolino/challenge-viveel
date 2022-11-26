import { Form } from "./components/Form";
import { FormContextProvider } from "./context/FormContext";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FormContextProvider>
        <Form />
        <GlobalStyle />
      </FormContextProvider>
    </ThemeProvider>
  );
}

export default App;
