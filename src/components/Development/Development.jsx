import React from 'react';

import { Root, Description } from './styles';

const Development = ({ title }) => {
  return (
    <Root>
      <h1>
        <span>👷‍♂</span>
        <br />
        {`Страница ${title} находится в разработке`}
        
      </h1>
      <Description>
        Совсем скоро она заработает
      </Description>
    </Root>
  );
};

export default Development;