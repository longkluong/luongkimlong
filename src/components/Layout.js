import * as React from "react"
import Footer from "./Footer"
import { Spacer } from "./Layout.style"
import GlobalStyle from "./GlobalStyle"
import Navbar from "./Navbar"

// import PageBackground from "../components/PageBackground"

const Layout = ({ location, image, className, children }) => {
  return (
    <>
      <GlobalStyle />
      {/* <PageBackground image={image} className={className} /> */}
      <Navbar />
      <Spacer />
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
