import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: var(--colorFooterBackground);
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: var(--maxWidth);
  height: 100%;

  a, span {
    color: white;
    padding: 10px;
  }
`