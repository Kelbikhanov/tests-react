import React, { useEffect } from "react";
import { Link } from "@reach/router";

import useToggle from "../../libs/hooks/useToggle";
import useIsMobile from "../../libs/hooks/useIsMobile";
import BurgerMenu from "./BurgerMenu";
import { headerRouters } from "../../constants/routes";

import {
  Container,
  MobileHeaderPlaceholder,
  Logo,
  Nav,
  NavList,
  NavItem,
  BasketContainer,
  Content,
  BurgerButton,
} from "./styles";

import LogoImage from "../../assets/img/logo.svg";
import { Basket } from "../Icons";

const Header = () => {
  const mobile = useIsMobile();
  const [burgerActive, toggleBurger] = useToggle();

  useEffect(() => {
    if (mobile || !burgerActive) {
      return;
    }

    toggleBurger();
  }, [mobile, toggleBurger, burgerActive]);

  return (
    <Container fixed={burgerActive}>
      <div className="container container--large">
        <Content>
          <Logo>
            <Link to="/">
              <img src={LogoImage} alt="nootris" />
            </Link>
          </Logo>
          <Nav>
            <NavList>
              {headerRouters.map((route) => {
                return (
                  <NavItem key={route.key}>
                    <Link to={route.href}>{route.key}</Link>
                  </NavItem>
                );
              })}
              <NavItem>
                <span>8 8 (800) 600-09-90</span>
              </NavItem>
            </NavList>
          </Nav>
          <BasketContainer>
            <Link to="/basket">
              <Basket />
            </Link>
          </BasketContainer>
          <BurgerButton onClick={toggleBurger} isNavOpen={burgerActive}>
            <span />
            <span />
            <span />
          </BurgerButton>
          {burgerActive && <BurgerMenu toggleBurger={toggleBurger} />}
        </Content>
        <MobileHeaderPlaceholder show={burgerActive} />
      </div>
    </Container>
  );
};

export default Header;
