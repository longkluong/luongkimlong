import styled from "styled-components";

export const Img = styled.div`
  /* background-image: url(${props => props.imgUrl}); */
  background-image: 
    /* linear-gradient(
      rgba(0, 0, 0, 0.9), 
      rgba(0, 0, 0, 0.2)
    ), */
    /* your image */
    url("https://images.unsplash.com/photo-1629104300041-331cddce6ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  opacity: 0.2;
  top: calc(0px - var(--nav-height));
  position: relative;
  padding: 20vh 10vw;
  width: 100%;
  height: 80vh;
  grid-column: 1 / 4;
  z-index: -1;
`
export const Title = styled.h2`
  color: white;
`

export const SubTittle = styled.p`
  color: white
`