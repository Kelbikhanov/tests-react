import styled, { css } from "styled-components";

import { device } from "../../libs/styles/breakpoints";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  background: var(--black);
  width: 100%;

  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      z-index: 2147483601;
      top: 0;
      left: 0;
    `}
`;

export const Logo = styled.div`
  display: inline-flex;
  margin: 0;

  & img {
    display: block;
    width: 90px;

    @media ${device.laptopM} {
      width: 120px;
    }
  }
`;

export const Nav = styled.nav`
  position: relative;
  flex: flex;

  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const NavItem = styled.li`
  display: block;
  margin-right: 10px;
  font-size: 10px;
  line-height: 18px;
  color: #fff;

  &:last-child {
    margin-right: 0;
  }

  & > a {
    color: #fff;

    &:hover {
      color: var(--brand-yellow);
    }
  }

  @media ${device.tabletL} {
    margin-right: 20px;
    font-size: 14px;
    line-height: 18px;
  }

  @media ${device.laptopM} {
    margin-right: 40px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const BasketContainer = styled.div`
  display: none;
  & svg {
    display: block;
    width: 22px;

    &:hover {
      fill: var(--brand-yellow);
    }

    @media ${device.laptopM} {
      width: 32px;
    }
  }

  @media ${device.tablet} {
    display: block;
  }
`;

export const MobileHeaderPlaceholder = styled.div`
  height: 60px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width);
  padding: 10px var(--horizontal-padding);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding: 10px var(--horizontal-padding);
  }

  @media ${device.laptopM} {
    padding: 20px var(--horizontal-padding);
  }
`;

export const LogoLink = styled.a`
  display: flex;

  & > svg {
    width: 107px;

    @media ${device.tablet} {
      width: 130px;
    }

    @media ${device.tabletL} {
      width: 160px;
    }
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.tablet} {
    & > *:nth-last-child(2) {
      margin-right: 6px;
    }
  }

  @media ${device.tabletL} {
    & > * + * {
      margin-left: 9px;
    }
  }
`;

export const Item = styled.li`
  display: flex;
`;

export const NavLink = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(--black);
  padding: 0 12px;

  &:hover {
    color: var(--gray);
  }

  @media ${device.tablet} {
    padding: 5px 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => (props.active ? "var(--gray)" : "var(--black)")};
    line-height: normal;
  }

  @media ${device.laptop} {
    font-size: 16px;
    transition: 0.2s color ease-in-out;
  }
`;

export const LoginLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 106px;
  height: 44px;
  color: var(--white);
  background: var(--nero);
  border-radius: 8px;
  transition: 0.2s background ease-in-out;

  &:hover {
    background: var(--night-rider);
  }

  & > * + * {
    margin-left: 7px;
  }

  @media ${device.laptop} {
    font-size: 16px;
    width: 113px;
    height: 47px;
  }
`;

export const BurgerButton = styled.button`
  position: relative;
  display: flex;
  outline: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  margin-right: -10px;
  background: var(--black);
  border: 0;
  box-shadow: none;

  @media (min-width: 350px) {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    display: none;
  }

  span {
    position: relative;
    display: block;
    width: 20px;
    height: 3px;
    margin-bottom: 3px;
    background: #fff;
    transition: 0.2s;

    ${({ isNavOpen }) =>
      isNavOpen &&
      css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      `}

    &:first-child {
      ${({ isNavOpen }) =>
        isNavOpen &&
        css`
          transform: rotate(-45deg);
        `};
    }

    &:nth-child(2) {
      position: relative;
      left: 2px;
      width: 16px;

      ${({ isNavOpen }) =>
        isNavOpen &&
        css`
          width: 0;
        `};
    }

    &:last-child {
      margin-bottom: ${({ isNavOpen }) => (isNavOpen ? "auto" : 0)};
      ${({ isNavOpen }) =>
        isNavOpen &&
        css`
          transform: rotate(45deg);
        `};
    }
  }
`;