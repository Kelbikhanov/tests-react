import React from "react";

import {
  BlockOneStyles,
  Top,
  BlockContent,
  ItemOne,
  ItemTwo,
  ItemTree,
  ItemText,
  PriceContainer,
  ItemNextCenter,
  Button,
} from "./styles";

import NootriesMin from "../../assets/img/nootris-min.png";
import Ginger from "../../assets/img/ginger.png";
import Vorus from "../../assets/img/vorus.png";

function BlockOne() {
  return (
    <div>
      <BlockOneStyles>
        <Top>
          <h2>
            <span>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</span>
            <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
          </h2>
        </Top>
        <BlockContent>
          <ItemOne>
            <img src={Ginger} alt="Ginger" />
            <ItemText>
              <span>Содержит</span>
              <span>имбирь</span>
            </ItemText>
          </ItemOne>
          <ItemTwo>
            <PriceContainer>
              <span>750₽</span>
              <span>690₽</span>
            </PriceContainer>
            <img src={NootriesMin} alt="Ginger" />
            <ItemNextCenter>
              <span>+ Бесплатная доставка</span>
              <span>Специальная цена</span>
            </ItemNextCenter>
            <Button>Оформить заказ</Button>
          </ItemTwo>
          <ItemTree>
            <img src={Vorus} alt="Ginger" />
            <ItemText>
              <span>Нейтрализует</span>
              <span>вирусы</span>
            </ItemText>
          </ItemTree>
        </BlockContent>
      </BlockOneStyles>
    </div>
  );
}

export default BlockOne;
