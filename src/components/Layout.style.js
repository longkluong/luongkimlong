import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr var(--contentWidth) 1fr;
  grid-column-gap: 32px;

  * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`
export const Spacer = styled.div`
  top: 0;
  width: 100%;
  height: var(--navHeight);
`