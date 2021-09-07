import React from "react";
import { Img, Title, SubTittle } from "./Hero.style";

const Hero = () => {
  return (
    <Img imgUrl="./test.jpeg">
      <Title>Long Luong</Title>
      <SubTittle>Welcome to my blog</SubTittle>
    </Img>
  )
}

export default Hero;