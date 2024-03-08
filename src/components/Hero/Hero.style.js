import styled from "styled-components";
import breakpoint from "../utils/breakpoint";

export const Wrapper = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.2)
  );

  display: grid;
  width: 100vw;

  .HeroImg {
    top: calc(0px - var(--nav-height));
    display: grid;
    grid-area: 1/1;
    z-index: -1;
    position: relative;
  }

  p{
    color: white;
    text-shadow: black 1px 0 10px;
  }
`

export const HeroText = styled.div`
  
  grid-area: 1/1;
  position: relative;
  padding: 5vh 5vw;
  ${breakpoint.md} {
    padding: 20vh 5vw;
    max-width: 65%;
  }
  /* justify-self: end; // Add this line to align the div to the right */
  /* text-align: right; */
`

export const Title = styled.h2`
  color: white;
  text-shadow: var(--colorPrimary) 1px 0 10px;
  font-size: 3rem;
  ${breakpoint.md} {
    font-size: 5rem;
  }
`

export const SubTittle = styled.h3`
  color: white;
  font-size: 2rem;
  text-shadow: var(--colorPrimary) 1px 0 10px;
  ${breakpoint.md} {
    font-size: 3rem;
  }
`