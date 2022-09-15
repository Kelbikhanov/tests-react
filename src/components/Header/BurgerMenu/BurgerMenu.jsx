import { Link } from "@reach/router";
import React from "react";

import { headerRouters } from "../../../constants/routes";

import { Container, Content, List, Item } from "./styles";

const BurgerMenu = ({ toggleBurger }) => {
  const CloseMenu = (index) => {
    toggleBurger(index);
  };

  return (
    <Container>
      <Content>
        <List>
          <Item>
            <Link onClick={() => CloseMenu()} to="/">
              Главная
            </Link>
          </Item>
          {headerRouters.map((route, index) => {
            return (
              <Item key={index}>
                <Link onClick={() => CloseMenu(index)} to={route.href}>
                  {route.key}
                </Link>
              </Item>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

export default BurgerMenu;
