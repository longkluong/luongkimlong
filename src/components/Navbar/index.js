import React from "react";
import { Link } from "gatsby";
import { Wrapper, Header, LogoText, Menu } from "./Navbar.style";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
    return (
        <Wrapper>
            <Header>
                <LogoText>
                    <a href='/'>Long Luong</a>
                </LogoText>
                <Menu>
                    <ul>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.url}>{item.text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </Menu>
            </Header>
        </Wrapper>
    )
}

export default Navbar;