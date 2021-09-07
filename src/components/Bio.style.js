import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  padding: 1.5rem;

  .AuthorAvatar {
    border-radius: 100%;
    flex-basis: 33%.33%;
  }
`

export const AuthorDescription = styled.div`
  flex: 1;

  p {
    margin: auto;
  }
`
