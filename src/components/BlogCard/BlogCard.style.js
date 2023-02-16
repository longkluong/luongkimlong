import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import breakpoint from "../utils/breakpoint"
import { Link } from "gatsby"

export const Title = styled.h2`
  font-weight: 500;
`
export const Content = styled.div`
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-top: -150px;
  padding: 20px 30px 30px 40px;
  position: relative;
  background-color: rgb(255, 255, 255, 0.95);
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  ${Title} {
    text-align: center;
    font-size: 2rem;
    margin: 0 auto;
    padding: 5px;
  }

  p {
    margin-bottom: 0;
  }
`

export const Wrapper = styled.div`
  /* flex: 1 1 calc(33.33% - calc(2 * var(--itemMargin))); */
  flex: 1 0 calc(100% - 2 * var(--itemMargin));
  margin: var(--itemMargin);
  position: relative;
  pointer-events: none;

  ${breakpoint.md} {
    flex: 1 0 calc(50% - 2 * var(--itemMargin));
  }

  ${breakpoint.lg} {
    &:first-of-type,
    &:nth-child(2) {
      flex: 1 0 calc(50% - 2 * var(--itemMargin));
    }
    flex: 1 0 calc(33.33% - 2 * var(--itemMargin));
  }

  .feature-image {
    height: 0;
    padding-top: 75%;
  }
  border-radius: 20px;
  position: relative;

  &:hover ${Content} {
    transform: translate(0, -5px);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }
`
export const FeaturedImage = styled(GatsbyImage)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Tag = styled.div`
  pointer-events: none;

  ul {
    text-align: center;
    margin: 10px 0;
  }
  li {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`
export const Category = styled.div`
  position: relative;
  margin-top: -42px;
  text-align: center;

  a {
    color: white;
    text-shadow: 0.1em 0.1em 0.05em black;
  }
`
export const Author = styled.div`
  font-weight: 800;
  font-family: monospace;
  display: inline-block;

  &:before {
    content: "By: ";
    font-weight: 400;
  }
`

export const Date = styled.div`
  /* float: right; */
  /* text-align: center; */
`

export const LinkOverlay = styled(Link)`
  position: absolute;
  pointer-events: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
