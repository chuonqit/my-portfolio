import React from 'react';
import * as Styled from './StyledSpine';

const Spine = () => {
  return (
    <Styled.Spine>
      <Styled.Target>
        <Styled.TargetCircle />
        <Styled.TargetPulse />
      </Styled.Target>
    </Styled.Spine>
  );
};

export default Spine;
