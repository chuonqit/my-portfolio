import React from 'react';
import * as Styled from './StyledSection';

const Section = ({ name, children }) => {
  return (
    <Styled.Section id={name}>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Section>
  );
};

export default Section;
