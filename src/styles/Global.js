import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif, Arial;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-family: inherit;
    }
    
    input, textarea {
        font-family: inherit;
        outline: none;
    }
`;