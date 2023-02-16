import { createGlobalStyle } from "styled-components"
import breakpoint from "./utils/breakpoint"

const GlobalStyle = createGlobalStyle`
    :root{
        // size
        --maxWidth: 1280px;
        /* --navHeight: 50px; */
        --itemMargin: 1vw;
        --logoSize: 2rem;
        --logoLineHeight: 1;
        --navHeight: calc(var(--logoLineHeight) * var(--logoSize) + 2rem);

        ${breakpoint.md} {
            --logoSize: 2.5rem;
        }

        @media all and (min-width: 80ch) {
            --contentWidth: 60ch;
        }

        --contentWidth: calc(100vw - 64px);
        /* --contentWidth: min(60ch, calc(100vw - 64px)); // This line does not work on Android Edge */

        // color
        --colorPrimary: orange;
        --colorSecondary: green;
        --colorHTML: #000033;
        --colorGrey: #353535;
        --colorBackground: rgba(242,239,228,1);
        --colorFont: #fff;
        --colorFontInverse: #000000;
        --colorNavLogo: #000000;
        --colorNavFont: #000;
        --colorNavBackground: rgba(242,239,228,0.97);
        --colorNavBackgroundBlur: rgba(242,239,228,0.5);
        --colorFooterBackground: #000033;
        --colorCodeLanguage: orange;

        --navOpacity: 0.8;

        --oppacityMedium: 0.8;

        // font
        --fontWeightXs: 300;
        --fontWeightS: 400;
        --fontWeightM: 500;
        --fontWeightL: 600;
        --fontWeightXl: 800;

        --fontSizeXs: 0.8rem;
        --fontSizeS: 1rem;
        --fontSizeM: 1.25rem;
        --fontSizeL: 2rem;
        --fontSizeXl: 3rem;

        --fontFamilyThree: 'EB Garamond', serif;

        @supports (font-variation-settings: normal) {
            --fontFamilyThree: 'EB GaramondVariable', serif;
        }



        --borderRadius: 5px;

        --coverImgOpacity: 0.6;

        --grvsc-padding-top: 2rem;

    }

    img {
        border-radius: 10px;
    }
    body{
        background-color: var(--colorBackground);
        word-wrap: break-word;
        word-break: break-word;
        /* overflow: hidden; */
        position: relative;
        width: 100%;
        height: 100%;
        font-family: Nunito, Tahoma, sans-serif;
        font-size: 16px;
    }
    body > div:first-of-type{
        overflow-x: hidden;
        position: relative;
        min-height: 100vh;
    }
    *{
        box-sizing: border-box;
        /* font-family: Nunito, Tahoma, sans-serif;
        font-size: 16px; */
        margin: 0;
        padding: 0;
        text-decoration: none;
        /* list-style: none; */
        /* color: var(--textColor); */
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Lora, 'Times New Roman', serif;
        transform: translate(-2px, 0px);
        margin-bottom: 1rem;
        margin-top: 2rem;
    }

    h1{
        font-size: var(--fontSizeXl);
    }

    h2 {
        font-size: var(--fontSizeL);
    }

    h3, h4 {
        font-size: var(--fontSizeM);
    }

    h5, h6{
        font-size: var(--fontSizeS);
    }

    ul{
        margin: 0;
        padding: 0;
    }

    p, pre{
        margin-bottom: 2rem;
    }

    li{
        margin-bottom: 1rem;
    }

    blockquote{
        background: #f9f9f9;
        border-left: 10px solid #ccc;
        margin: 1.5em 10px;
        padding: 0.5em 10px;
    }

    blockquote:before {
      color: #ccc;
      content: open-quote;
      font-size: 4em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }

    blockquote p {
      display: inline;
    }

    .grvsc-container:after {
      content: attr(data-language);
      background: var(--colorCodeLanguage);
      border-radius: 0px 0px 4px 4px;
      font-size: 0.75rem;
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-weight: 400;
      letter-spacing: 0.075em;
      line-height: 1;
      padding: 0.25rem 0.5rem;
      position: absolute;
      left: 1.5rem;
      text-align: right;
      text-transform: uppercase;
      top: 0px;
      /* position: absolute;
      right: 22px;
      top: 17px;
      font-size: .85rem;
      font-family: var(--font-monospace);
      font-style: italic; */
    }

    .BackgroundImg {
    height: 40vh;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    opacity: var(--coverImgOpacity);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-mask-image: linear-gradient(
      to top,
      transparent,
      rgba(0, 0, 0, 0.013) 8.1%,
      rgba(0, 0, 0, 0.049) 15.5%,
      rgba(0, 0, 0, 0.104) 22.5%,
      rgba(0, 0, 0, 0.175) 29%,
      rgba(0, 0, 0, 0.259) 35.3%,
      rgba(0, 0, 0, 0.352) 41.2%,
      rgba(0, 0, 0, 0.45) 47.1%,
      rgba(0, 0, 0, 0.55) 52.9%,
      rgba(0, 0, 0, 0.648) 58.8%,
      rgba(0, 0, 0, 0.741) 64.7%,
      rgba(0, 0, 0, 0.825) 71%,
      rgba(0, 0, 0, 0.896) 77.5%,
      rgba(0, 0, 0, 0.951) 84.5%,
      rgba(0, 0, 0, 0.987) 91.9%,
      #000
    );
    mask-image: linear-gradient(
      to top,
      transparent,
      rgba(0, 0, 0, 0.013) 8.1%,
      rgba(0, 0, 0, 0.049) 15.5%,
      rgba(0, 0, 0, 0.104) 22.5%,
      rgba(0, 0, 0, 0.175) 29%,
      rgba(0, 0, 0, 0.259) 35.3%,
      rgba(0, 0, 0, 0.352) 41.2%,
      rgba(0, 0, 0, 0.45) 47.1%,
      rgba(0, 0, 0, 0.55) 52.9%,
      rgba(0, 0, 0, 0.648) 58.8%,
      rgba(0, 0, 0, 0.741) 64.7%,
      rgba(0, 0, 0, 0.825) 71%,
      rgba(0, 0, 0, 0.896) 77.5%,
      rgba(0, 0, 0, 0.951) 84.5%,
      rgba(0, 0, 0, 0.987) 91.9%,
      #000
    );

    ${breakpoint.md} {
      height: 70vh;
    }
  }
  .category {
    position: relative;
    display: inline-block;
    white-space: nowrap;
    font-size: var(--fontSizeM);
    font-weight: 500;
    font-family: Rubik, Arial, sans-serif;
    transition: transform 200ms ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    z-index: 1;
    pointer-events: auto;
    color: var(--textColor);

    &:hover {
      transform: translateY(-0.2rem);
    }

    &:after {
      position: absolute;
      content: "";
      height: 75%;
      top: 0.8rem;
      left: -0.2rem;
      width: calc(100% + 0.5em);
      z-index: -1;
      background-color: var(--colorPrimary);
    }
  }
  .tag {
    display: inline-block;
    pointer-events: auto;
    white-space: nowrap;
    padding: 0.5em 1em;
    border: 1px solid gray;
    margin-right: 5px;
    margin-top: 5px;
    border-radius: 20px;
    font-family: Rubik, Arial, sans-serif;
    font-size: var(--fontSizeXs);
    color: black;
    background-color: white;
    text-shadow: none;
    transform: translateX(-0.25rem);
    transition: all 200ms ease-in-out;
    z-index: 1;

    &:hover {
      color: white;
      background-color: black;
    }
  }
`
export default GlobalStyle
