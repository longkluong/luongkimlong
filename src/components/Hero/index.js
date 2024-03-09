import React from "react";
import { Wrapper, Title, SubTittle, HeroText } from "./Hero.style";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <Wrapper>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        className="HeroImg"
        // style={{
        //   gridArea: "1/1",
        //   // You can set a maximum height for the image, if you wish.
        //   // maxHeight: 600,
        // }}
        layout="fullWidth"
        aspectRatio={5 / 2}
        alt=""
        src="../../images/hero-image.png"
        formats={["auto", "webp", "avif"]}
        placeholder="blurred"
        objectPosition={"65%"}
      />
      <HeroText>
        {/* Any content here will be centered in the component */}
        <Title>I'm <span>Long Luong</span></Title>
        <SubTittle><span>Welcome</span> to my blog!</SubTittle>
        <p>My name is LUONG Kim Long, from Vietnam. I teach finance at Ton Duc Thang University and work as a research assistant at HKUST. My research interests are Corporate Finance and Behavioral Finance.</p>
        <p>On this blog, I'll share bite-sized, fun stuff about finance, coding, photography, music, and sports. Ready to dive into a mix of ideas and hobbies with me? Let's go!</p>
      </HeroText>
    </Wrapper>
  )
}

export default Hero;