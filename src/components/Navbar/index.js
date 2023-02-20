import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Global, Wrapper, Logo, Hamburger, Menu, Overlay } from "./Navbar.style"
import kebabCase from "lodash.kebabcase"

const Navbar = () => {
  const [nav, showNav] = useState(false)

  const data = useStaticQuery(graphql`
    query Category {
      allMdx(
          sort: {frontmatter: {date: DESC}}
          filter: {frontmatter: {draft: {eq: false}}}
        ) {
          edges {
              node {
                  frontmatter {
                      category
                  }
              }
          }        
      }
    }
  `)

  const categories = []

  data.allMdx.edges.forEach((post, index) => {
    post.node.frontmatter.category.forEach(cat => categories.push(cat))
  })
  
  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const allCategories = Object.keys(countCategories)

  allCategories.sort()

  const menuItems = [{
            text: "Home",
            url: "/",
        },
      ]

  const newItems = allCategories.map(cat => {
    return {text: cat, url: `/category/${kebabCase(cat)}`}
  })

  menuItems.push(...newItems)

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
          {menuItems.map((item, index) => {
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
          {/* {menuItems.map((item) => {
            return (
              <Link
                key={`${kebabCase(item)}`}
                to={`/category/${kebabCase(item)}`}
                onClick={() => {
                  showNav(false)
                }}
              >
                {item}
              </Link>
            )
          })} */}
          {/* {menuItems} */}
        </Menu>
      </Wrapper>
    </>
  )
}

export default Navbar
