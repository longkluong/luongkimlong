import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import breakpoint from "../breakpoint"

export const LinkWrapper = styled.div`
  /* flex: 1 1 calc(33.33% - calc(2 * var(--itemMargin))); */
  flex: 1 0 calc(100% - 2 * var(--itemMargin));
  margin: var(--itemMargin);

  ${breakpoint.md} {
    flex: 1 0 calc(50% - 2 * var(--itemMargin));
  }

  ${breakpoint.lg} {
    &:first-of-type, &:nth-child(2){
      flex: 1 0 calc(50% - 2 * var(--itemMargin));
    }
    flex: 1 0 calc(33.33% - 2 * var(--itemMargin));
  }

  .feature-image{
    height: 0;
    padding-top: 75%;
  }
`

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
  /* bottom: 150px; */
  background-color: rgb(255, 255, 255, 0.95);
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  z-index: 1;

  ${Title} {
    text-align: center;
    font-size: 2rem;
    margin: 0 auto;
    padding: 5px;
  }

  p {
    margin-bottom: 0;
  }

  //The Balance liked border
  /* &:after {
    border: 3px solid yellow;
    content: "";
    margin: 0 auto; 
    position: absolute;
    top: -10px;
    left: 5px;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  } */
`

export const Wrapper = styled.div`
  display: block;
  border-radius: 20px;
  position: relative;
  margin-bottom: 20px;
  /* background-color: lightgray; */

  &:hover ${Content} {
    transform: translate(0, -5px);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }
`
export const FeaturedImage = styled(GatsbyImage)`
  /* width: 100%; */
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Tag = styled.div`
  ul {
    text-align: center;
    margin: 10px 0;
  }
  li {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  /* a {
    font-size: 0.8rem;
    font-family: monospace;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
    color: var(--primary);
  }

  a:hover{
    background-color: rgb(255, 255, 100, 0.8);
  } */

  /* &:before {
    content: "Tags: ";
    font-size: 1 rem;
  } */
`
export const Category = styled.div`
  position: relative;
  margin-top: -42px;
  text-align: center;

  a{
    color: white;
    text-shadow: 0.1em 0.1em 0.05em black;
  }
`
export const Author = styled.div`
  font-weight: 800;
  font-family: monospace;
  display: inline-block;
  /* text-align: center; */

  &:before {
    content: "By: ";
    font-weight: 400;
  }
`

export const Date = styled.div`
  /* float: right; */
  /* text-align: center; */
`
