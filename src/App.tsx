import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/CartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ModalProvider } from "styled-react-modal";
import { FormContextProvider } from "./context/FormContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <FormContextProvider>
          <CartContextProvider>
            <ModalProvider>
              <Router />
            </ModalProvider>
          </CartContextProvider>
        </FormContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
