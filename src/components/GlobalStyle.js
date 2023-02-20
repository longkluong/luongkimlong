import { createGlobalStyle } from "styled-components";
import breakpoint from "./utils/breakpoint";

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

        --rootFontSize: 16px;
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
        border-radius: var(--borderRadius);
    }

    html {
      font-size: var(--rootFontSize)
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
        font-size: var(--rootFontSize);
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
        /* background: #f9f9f9; */
        border-left: 0.5rem solid var(--colorFooterBackground);
        margin: 1.5em 10px;
        padding: 0.5em 10px;
    }

    blockquote:before {
      color: var(--colorFooterBackground);
      content: open-quote;
      font-size: 4em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }

    blockquote:after {
      content: no-close-quote;
    }

    blockquote p {
      display: inline;
    }

    /* CSS for Code block Begin */

    :not(pre) > code[class*="language-"], pre[class*="language-"] {
      border-radius: var(--borderRadius);
    }

    /* CSS for highlighted code */
    .gatsby-highlight-code-line { 
      background-color: #535353;
      display: block;
      margin-right: -1em;
      margin-left: -0.75em;
      padding-right: 1em;
      padding-left: 0.75em;
      border-left: 0.25em solid var(--colorCodeLanguage);
    }

    /**
    * Add back the container background-color, border-radius, padding, margin
    * and overflow that we removed from <pre>.
    */
    .gatsby-highlight {
      background-color: #2d2d2d; // prism-tomorrow theme
      border-radius: 0.3em;
      margin: 0.5em 0;
      padding: 1em;
      overflow: auto;
      font-size: 1rem;
      -webkit-text-size-adjust: 100% !important; 
      /*text-size-adjust: none; */
    }

    /**
    * Remove the default PrismJS theme background-color, border-radius, margin,
    * padding and overflow.
    * 1. Make the element just wide enough to fit its content.
    * 2. Always fill the visible space in .gatsby-highlight.
    * 3. Adjust the position of the line numbers
    */
    .gatsby-highlight pre[class*="language-"] {
      background-color: transparent;
      margin: 0.5em 0 0 0;
      padding: 0;
      overflow: initial;
      float: left; /* 1 */
      min-width: 100%; /* 2 */
    }

    /* Adjust the position of the line numbers */
    .gatsby-highlight pre[class*="language-"].line-numbers {
      padding-left: 2.8em;
    }

    .gatsby-highlight {
      position: relative;
    }

    .gatsby-highlight:before {
      z-index: 1;
      content: attr(data-language);
      background: var(--colorCodeLanguage);
      border-radius: 0px 0px 4px 4px;
      font-size: 0.6rem;
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-weight: 400;
      letter-spacing: 0.075em;
      line-height: 1;
      padding: 0.25rem 0.5rem;
      position: absolute;
      left: 2.8rem;
      text-align: right;
      text-transform: uppercase;
      top: 0rem;
    }

    /* End CSS for Code block */

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

  iframe[src*=youtube] {
    margin: 2rem auto;
    display: block;
    max-width: 100%;
    border-radius: var(--borderRadius)
  }`
;
export default GlobalStyle;
