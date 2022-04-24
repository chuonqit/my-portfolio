import styled, { keyframes, css } from 'styled-components';

export const Spine = styled.div`
  position: fixed;
  top: 50vh;
  bottom: 0;
  left: calc(20vw - 2rem);
  z-index: 2;
  width: 1px;
  background: var(--purple)
    linear-gradient(
      to top,
      var(--background) 1rem,
      rgba(var(--background-rgb), 0) 20vh
    );
`;

const pulseAnimation = keyframes`
  0% {
    transform: matrix(0, 0, 0, 0, 0, 0);
    opacity: 1;
  }
  20% {
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 0.8;
  }
  40% {
    transform: matrix(2, 0, 0, 2, 0, 0);
    opacity: 0.6;
  }
  60% {
    transform: matrix(3, 0, 0, 3, 0, 0);
    opacity: 0.4;
  }
  80% {
    transform: matrix(2, 0, 0, 2, 0, 0);
    opacity: 0.2;
  }
  100% {
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 0;
  }
`;

const circleAnimation = keyframes`
  0% {
    background-color: var(--purple);
    opacity: 1;
  }
  20% {
    background-color: var(--purple);
    opacity: 0.8;
  }
  40% {
    background-color: var(--purple);
    opacity: 0.7;
  }
  60% {
    background-color: var(--purple);
    opacity: 0.8;
  }
  80% {
    background-color: var(--purple);
    opacity: 0.7;
  }
  100% {
    background-color: var(--purple);
    opacity: 1;
  }
`;
export const Target = styled.div`
  position: fixed;
  top: calc(50vh - 17px);
  left: calc(20vw - 2rem - 8px);
  width: 17px;
  height: 17px;
  z-index: 3;
`;

const CirclePulseCss = css`
  position: absolute;
  width: 17px;
  height: 17px;
  transform-origin: center;
  border-radius: 3rem;
  background: transparent;
  border: 1px solid var(--purple);
`;

export const TargetCircle = styled.div`
  ${CirclePulseCss}
  animation: ${circleAnimation} 800ms cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-iteration-count: infinite;
`;

export const TargetPulse = styled.div`
  ${CirclePulseCss}
  animation: ${pulseAnimation} 800ms cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-iteration-count: infinite;
`;
