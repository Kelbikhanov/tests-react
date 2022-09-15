import styled from "styled-components";
import { device } from "../../libs/styles/breakpoints";

export const Root = styled.div`
  padding: 100px 16px;
  max-width: auto;
  margin: 0 auto;
  text-align: center;

  & > h1 {
    font-size: 18px;

    @media ${device.tablet} {
      font-size: 32px;
    }
  }

  @media ${device.tablet} {
    font-size: 32px;
    padding: 100px;
    max-width: 750px;
  }
`;

export const Description = styled.p`
  font-size: 16px;

  @media ${device.tablet} {
    font-size: 22px;
  }
`;
