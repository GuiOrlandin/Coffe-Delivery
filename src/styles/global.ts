import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, button, input, textarea {
        font-weight: 400;
        font-size: 1rem;
    }
`;
