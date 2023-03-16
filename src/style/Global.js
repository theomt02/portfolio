import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    transition: background 500ms;

    font-family: 'Averia Serif Libre', cursive;
    font-weight: 400;
  }
  small {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.4;
    margin: var(--space-xsmall) 0 var(--space-small) 0;
    padding: 0 var(--space-xsmall);
  }
  a {
    color: ${(props) => props.theme.text};
  }
  svg {
    display: none;
  }

  `;
