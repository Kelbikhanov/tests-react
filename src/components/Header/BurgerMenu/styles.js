import styled from 'styled-components';

import { device } from '../../../libs/styles/breakpoints';
import { NavLink as HeaderLink } from '../styles';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 100%;
  background: var(--black);
  overflow-y: auto;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 21px;
  padding-bottom: 80px;

  @media ${device.mobileL} {
    padding-top: 71px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 16px;
  list-style: none;

  & > * + * {
    margin-top: 0;
  }

  @media ${device.mobileL} {
    & > * + * {
      margin-top: 0;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 18px 0;

  & > a {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
  }
`;

export const ItemSupport = styled(Item)`
  padding: 0;
`;

export const NavLink = styled(HeaderLink)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;
