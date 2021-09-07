import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
`

export const PaginationItem = styled.div`
  display: flex;
  min-width: 50px;
  margin: -1px 0.5em 0;
  padding: 1em 0;
  text-align: center;
  border-top: 1px solid transparent;

  a, span {
    /* display: inline-block; */
    padding: 1em 1.2em;
    position: relative;
    width: 100%;
    /* background-color: red; */
    ${({ current }) =>
    current &&
    `
      border-top: 2px solid #000;
    `}
  }

  a:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-bottom: solid 3px var(--colorPrimary);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    /* z-index: 1; */
  }

  a:hover:after {
    transform: scaleX(1);
  }
`
