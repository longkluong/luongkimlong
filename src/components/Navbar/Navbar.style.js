import styled from "styled-components"
import breakpoint from "./../utils/breakpoint"
import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  body{
    overflow-y: ${({ nav }) => (nav ? "hidden" : "auto")};
    /* ${({ nav }) =>
      nav
        ? `--colorNavBackground: white`
        : `--colorNavBackground: transparent`}; */
    ${breakpoint.md} {
      overflow-y: auto;
    }
  }
`
export const Overlay = styled.div`
  position: fixed;
  /* top: var(--navHeight); */
  top: 0;
  left: 0;
  width: 120vw;
  height: 120vh;
  z-index: 999;
  background-color: var(--colorNavBackground);
  transform: ${({ nav }) => (nav ? "0" : "translateX(100%)")};
  transition: transform 200ms;
  /* opacity: var(--navOpacity); */

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: var(--colorNavBackgroundBlur);
    backdrop-filter: blur(2em);
  }

  ${breakpoint.md} {
    display: none;
  }
`
export const Wrapper = styled.div`
  background-color: var(--colorNavBackground);
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: var(--colorNavBackgroundBlur);
    backdrop-filter: blur(2em);

    ${({ nav }) =>
      nav &&
      `
      background-color: transparent;
      backdrop-filter: none;
  `}
  }

  z-index: 1000;
  position: fixed;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 8vw 0.5rem 8vw;
`

export const Logo = styled.div`
  a {
    display: block;
    font-size: var(--logoSize);
    line-height: var(--logoLineHeight);
    font-weight: var(--fontWeightBold);
    color: var(--colorNavLogo);
  }
`

export const Hamburger = styled.div`
  span {
    display: block;
    width: 26px;
    height: 3px;
    margin: 4px 0px;
    background-color: var(--colorNavFont);
    border-radius: var(--borderRadius);
    transform-origin: 50%;
    transition: ${({ nav }) =>
      nav
        ? `opacity 200ms linear 0ms, transform 250ms ease-in-out 50ms`
        : `transform 250ms ease-in-out 0ms, opacity 200ms linear 50ms`};

    :first-child {
      /* transform: ${({ nav }) =>
        nav ? "rotate(45deg) translateY(10px)" : "rotate(0) translateY(0)"}; */
      transform: ${({ nav }) =>
        nav ? "translateY(7px) rotate(225deg)" : "none"};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      /* transform: ${({ nav }) =>
        nav
          ? "rotate(-45deg) translateY(-10px)"
          : "rotate(0) translateY(0)"}; */
      transform: ${({ nav }) =>
        nav ? "translateY(-7px) rotate(-225deg)" : "none"};
    }
  }

  ${breakpoint.md} {
    display: none;
  }
`

export const Menu = styled.nav`
  display: flex; // need to change this to block later
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  width: 100%;
  overflow: hidden;
  /* background-color: var(--colorNavBackground); */
  position: absolute;
  height: calc(100vh - var(--navHeight));
  top: var(--navHeight);
  left: 0;
  transform: translateX(100%);

  ${({nav}) => nav && `
    transform: translateX(0);
    overflow-y: auto;
  `}
  transition: transform 200ms linear;

  a {
    width: 100%;
    color: var(--colorNavFont);
    padding: 1em 1.2em;
    /* opacity: var(--oppacityMedium); */
    transition: border-bottom 200ms linear;
  }

  ${breakpoint.md} {
    position: static;
    display: flex;
    width: auto;
    height: auto;
    transform: none;

    a {
      width: auto;
    }
    a:after {
      display: block;
      content: "";
      border-bottom: solid 3px var(--colorPrimary);
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    a:hover:after {
      transform: scaleX(1);
    }
  }
`
