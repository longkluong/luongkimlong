import styled from "styled-components"
import breakpoint from "../utils/breakpoint"

export const PostHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 3vh auto 10vh;
  padding: 0 8vw;

  .post-header-image {
    line-height: 0;
    align-self: flex-start;

    width: 100%;
    ${breakpoint.md} {
      width: 320px;
    }

    ${breakpoint.lg} {
      width: 367px;
    }
  }

  ${({ landscape }) =>
    landscape &&
    `
    max-width: var(--maxWidth);
    padding: 10vh 4% 12vh;

    color: white;
    text-shadow: 0.1em 0.1em 0.05em black;
    background-color: rgba(0,0,0,0.5);

    .post-header-image {
      position: absolute;
      z-index: -2;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
  }
  `}

  p {
    font-family: Rubik, Arial, sans-serif;
  }
`
export const PostHeaderContent = styled.div`
  flex: 1 0 50%;
  padding: 0 8% 2vh 0;
`
