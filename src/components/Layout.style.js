import styled from "styled-components"
import breakpoint from "./utils/breakpoint"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(0, var(--contentWidth)) 1fr;

  ${breakpoint.md} {
    grid-template-columns: 1fr minmax(0, 30ch) minmax(0, 4rem) var(--contentWidth) 4rem 30ch 1fr;
  }

  grid-auto-flow: dense;
  margin-top: 4rem;
  margin-bottom: 4rem;

  flex: 1 1 auto;
  margin: 0 auto;
  min-width: 0;
  width: 90vw;
`
export const Article = styled.article`

  grid-column: 2/3;

  ${breakpoint.md} {
    grid-column: 4/5;
  }
`

export const Spacer = styled.div`
  top: 0;
  width: 100%;
  height: var(--navHeight);
`