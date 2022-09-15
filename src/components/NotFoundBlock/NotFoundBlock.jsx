import React from 'react';

import { Root, Description } from './styles';

const NotFoundBlock = () => {
  return (
    <Root>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <Description>
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </Description>
    </Root>
  );
};

export default NotFoundBlock