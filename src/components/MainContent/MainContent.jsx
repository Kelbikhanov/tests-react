import React from "react";

import {
  SectionOne,
  MainContentStyles,
  ImageContent,
  MainText,
  SubText,
  MainTitle,
  MainSubtitle,
  SubTitle,
  Description,
  ImageNootries,
  ImageLemon,
  ImageGinger,
} from "./styles";

import MainBackgroud from "../../assets/img/bg.jpg";
import Nootries from "../../assets/img/nootris.png";
import Lemon from "../../assets/img/Lemon.png";
import Ginger from "../../assets/img/ginger.png";

function MainContent() {
  return (
      <SectionOne>
        <img src={MainBackgroud} alt="main-background" />
        <div className="container container--large">
          <MainContentStyles>
            <div>
              <MainText>
                <MainTitle>АКТИВИРУЙ ИММУНИТЕТ!</MainTitle>
                <MainSubtitle>
                  Всего пять секунд в день помогут укрепить иммунитет и повысить
                  защитные силы организма
                </MainSubtitle>
              </MainText>
              <SubText>
                <SubTitle>NOOTRIS ПОМОГАЕТ</SubTitle>
                <Description>
                  Вашему организму во время пандемии и сезонных простуд
                </Description>
              </SubText>
            </div>
            <ImageContent>
              <ImageNootries src={Nootries} alt="nootries" />
              <ImageLemon src={Lemon} alt="nootries" />
              <ImageGinger src={Ginger} alt="nootries" />
            </ImageContent>
          </MainContentStyles>
        </div>
      </SectionOne>
  );
}

export default MainContent;
