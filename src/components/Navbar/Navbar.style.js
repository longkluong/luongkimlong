import styled from "styled-components"
import breakpoint from "./../breakpoint"

export const Wrapper = styled.header`
  max-height: 80px;
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
`

export const LogoText = styled.div`
  a {
    font-size: var(--fontMd);
    color: var(--primary);
    display: inline;
    font-weight: 700;
    text-decoration: none;

    ${breakpoint.device.md} {
      font-size: var(--fontLg);
    }
  }
`

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style: none;
  width: 50vw;
  text-align: center;
  justify-content: end;

  li {
    display: inline;
  }

  a {
    padding: 10px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    background-color: grey;
  }
`
