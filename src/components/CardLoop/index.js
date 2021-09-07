import React from "react";
import { Wrapper } from "./CardLoop.style"

const CardLoop = ({ children }) => {
  return(
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default CardLoop