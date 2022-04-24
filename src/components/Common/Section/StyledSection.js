import styled from 'styled-components';

export const Section = styled.div`
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 2rem 0 20vw;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;

  & h1 {
    margin-right: 0;
    padding-right: 0;
  }
`;
