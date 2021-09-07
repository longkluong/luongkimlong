import React, { useState } from "react"
import { Link } from "gatsby"
import { Global, Wrapper, Logo, Hamburger, Menu, Overlay } from "./Navbar.style"
import { MenuItems } from "./MenuItems"

const Navbar = () => {
  const [nav, showNav] = useState(false)
  return (
    // <Wrapper>
    //   <Navbar>
    //     <LogoText>
    //       <a href="/">Long Luong</a>
    //     </LogoText>
    //     <Nav>
    //       <ul>
    //         {MenuItems.map((item, index) => {
    //           return (
    //             <li key={index}>
    //               <Link to={item.url}>{item.text}</Link>
    //             </li>
    //           )
    //         })}
    //       </ul>
    //     </Nav>
    //   </Navbar>
    // </Wrapper>
    <>
      <Overlay nav={nav} />
      <Wrapper nav={nav}>
        <Global nav={nav} />
        <Logo>
          <Link to="/">Long's</Link>
        </Logo>
        <Hamburger
          nav={nav}
          onClick={() => {
            showNav(!nav)
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu nav={nav}>
          {MenuItems.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.url}
                onClick={() => {
                  showNav(false)
                }}
              >
                {item.text}
              </Link>
            )
          })}
        </Menu>
      </Wrapper>
    </>
  )
}

export default Navbar
