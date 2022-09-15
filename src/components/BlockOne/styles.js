import styled from "styled-components";
import { device } from "../../libs/styles/breakpoints";

export const BlockOneStyles = styled.section`
  background: #000;
  padding: 40px 0;

  @media ${device.tablet} {
    padding: 80px 0;
  }

  @media ${device.laptop} {
    padding: 112px 0;
  }
`;

export const Top = styled.div`
  & > h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    & > span {
      color: #fff;

      &:last-child {
        color: var(--brand-yellow);
      }
    }

    @media ${device.tablet} {
      font-size: 28px;
      line-height: 37px;
    }

    @media ${device.tabletL} {
      font-size: 38px;
      line-height: 47px;
    }

    @media ${device.laptopM} {
      font-size: 48px;
      line-height: 57px;
    }
  }
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;

  @media ${device.tablet} {
    padding: 85px 125px 0 125px;
  }

  @media ${device.laptopM} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 85px 175px 0 175px;
  }
`;

export const ItemOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  & > img {
    width: 100%;
    max-width: 193px;
  }

  @media ${device.tabletL} {
    padding-bottom: 0;
  }
`;

export const ItemText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  font-size: 18px;
  line-height: 21px;

  & > span {
    color: #fff;

    &:last-child {
      color: var(--brand-yellow);
    }
  }

  @media ${device.tabletL} {
    padding-top: 78;
  }
`;

export const ItemTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  & > img {
    width: 100%;
    max-width: 480px;
  }

  @media ${device.tabletL} {
    padding-bottom: 0;
  }
`;

export const ItemNextCenter = styled(ItemText)`
  font-size: 22px;
  line-height: 23px;
  padding-top: 25px;
  padding-bottom: 24px;

  & > span {
    color: #fff;

    &:last-child {
      padding-top: 8px;
      color: var(--brand-yellow);
      font-size: 24px;
      line-height: 28px;
    }
  }

  @media ${device.tablet} {
    font-size: 36px;
    line-height: 33px;
    padding-top: 35px;
    padding-bottom: 44px;
  }

  @media ${device.laptopM} {
    line-height: 43px;
    padding-top: 45px;
    padding-bottom: 64px;
  }
`;

export const Button = styled.button`
  background: var(--brand-yellow);
  border-radius: 4px;
  padding: 10px 24px;
  color: #000;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.laptopM} {
    padding: 16px 32px;
    border-radius: 7px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 39px;

  & > span {
    color: #fff;

    &:first-child {
      text-decoration: line-through;

      font-size: 26px;
      line-height: 33px;
      padding-right: 22px;

      @media ${device.laptopM} {
        font-size: 36px;
        line-height: 43px;
        padding-right: 32px;
      }
    }

    &:last-child {
      font-size: 38px;
      line-height: 33px;
      color: var(--brand-yellow);

      @media ${device.laptopM} {
        font-size: 48px;
        line-height: 57px;
      }
    }
  }

  @media ${device.laptopM} {
    padding-bottom: 59px;
  }
`;

export const ItemTree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 100%;
    max-width: 192px;
  }
`;
