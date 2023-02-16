import React from "react";
import { Wrapper, Content } from "./Footer.style";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <span>© {new Date().getFullYear()}, By Long Luong</span>
      </Content>
    </Wrapper>
  )
}

export default Footer
