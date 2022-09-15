import styled from "styled-components";
import { device } from "../../libs/styles/breakpoints";

export const SectionOne = styled.section`
  position: relative;
  padding-bottom: 75px;

  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -3;
  }
`;

export const MainContentStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileXL} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImageContent = styled.div`
  display: none;

  @media ${device.mobileXL} {
    display: block;
  }
`;

export const ImageNootries = styled.img`
  position: absolute;
  top: 36%;
  width: 100px;
  right: 40px;
  z-index: -1;

  @media ${device.tabletL} {
    width: 140px;
    top: 37%;
    right: 105px;
  }

  @media ${device.laptopM} {
    width: 224px;
    top: 62px;
    right: 160px;
  }
`;

export const ImageLemon = styled.img`
  position: absolute;
  bottom: -26%;
  width: 240px;
  right: 70px;

  @media ${device.tabletL} {
    width: 380px;
  }

  @media ${device.laptopM} {
    width: 533px;
  }
`;

export const ImageGinger = styled.img`
  position: absolute;
  right: 0;
  width: 210px;
  bottom: 5%;
  z-index: -2;

  @media ${device.tabletL} {
    width: 320px;
    right: 43px;
  }

  @media ${device.laptopM} {
    width: 496px;
  }
`;

export const MainText = styled.div`
  padding-top: 30px;
  z-index: 1;
  text-align: center;

  @media ${device.mobileXL} {
    text-align: start;
    padding-top: 60px;
  }

  @media ${device.tabletL} {
    padding-top: 96px;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 21px;
  line-height: 38px;
  color: #fff;

  @media ${device.mobileXL} {
    font-size: 30px;
    line-height: 58px;
  }

  @media ${device.tablet} {
    font-size: 40px;
  }

  @media ${device.tabletL} {
    font-size: 95px;
    line-height: 120px;
  }

  @media ${device.laptopM} {
    font-size: 144px;
    line-height: 152px;
  }
`;

export const MainSubtitle = styled.span`
  display: flex;
  max-width: 500px;
  padding-top: 15px;
  font-size: 14px;
  line-height: 18px;
  color: #000;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 22px;
    max-width: 672px;
  }

  @media ${device.tabletL} {
    padding-top: 30px;
  }

  @media ${device.laptopM} {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const SubText = styled.div`
  padding-top: 60px;
  text-align: center;

  @media ${device.mobileXL} {
    text-align: start;
    padding-top: 120px;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;

  @media ${device.tabletL} {
    font-size: 26px;
    line-height: 34px;
  }

  @media ${device.laptopM} {
    font-size: 36px;
    line-height: 43px;
  }
`;

export const Description = styled.p`
  padding-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  @media ${device.mobileXL} {
    display: flex;
    max-width: 416px;
    font-size: 16px;
  }

  @media ${device.tabletL} {
    padding-top: 20px;
  }
`;
