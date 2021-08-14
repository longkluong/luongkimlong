import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --primary: orange;
        --secondary: green;
        --fontMd: 1.5rem;
        --fontLg: 2rem;
        --grey: #353535;
        --textColor: black;
    }

    img {
        border-radius: 10px;
    }

    *{
        box-sizing: border-box;
        font-family: Nunito, Tahoma, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        color: var(--textColor);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Lora, 'Times New Roman', serif;
        color: #363636;
        transform: translate(-2px, 0px);
        margin-bottom: 1rem;
        margin-top: 2rem;
    }

    h1{
        font-size: 3rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }

    h4{
        font-size: 1.5rem;
    }

    h5{
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    ul{
        margin: 0;
        padding: 0;
    }

    p{
        margin-bottom: 2rem;
    }
`
export default GlobalStyle;