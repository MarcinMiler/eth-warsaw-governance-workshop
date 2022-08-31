import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100vh;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    h1, p {
        margin: 0;
    }

    input {
        font-family: 'Montserrat', sans-serif;
    }

    * {
        box-sizing: border-box;
    }
`
