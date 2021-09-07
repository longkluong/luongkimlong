import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const PageBackground = ({ image, className }) => {
  const allClassName = `BackgroundImg ${className}`
  // const imgStyle = {"border-radius": "0px"}
  return <GatsbyImage imgStyle={{"border-radius": "0px"}} className={allClassName} image={image} alt=""></GatsbyImage>
}

export default PageBackground;
