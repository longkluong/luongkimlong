import * as React from "react"
import Footer from "./Footer"
import { Content, Wrapper } from "./Layout.style"
import GlobalStyle from "./GlobalStyle"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar></Navbar>
      <Wrapper>
        <Content>
          <main>{children}</main>
        </Content>
      </Wrapper>
      <Footer></Footer>
    </>
  )
}

export default Layout
