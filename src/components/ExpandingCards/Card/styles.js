import styled, { keyframes, css } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const vibration = keyframes`
  0% {transform: translate(0px, 0px) rotateZ(0deg)}
  25% {transform: translate(2px, 2px) rotateZ(1deg)}
  50% {transform: translate(0px, 2px) rotateZ(0deg)}
  75% {transform: translate(2px, 0px) rotateZ(-1deg)}
  100% {transform: translate(0px, 0px) rotateZ(0deg)}
`;

export const CardWrapper = styled.div`
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #fff;
  cursor: pointer;
  flex: ${({ isActive }) => (isActive ? '5' : '0.5')};
  position: relative;
  transition: flex 0.7s ease-in;
  margin: 4px;

  &: first-child {
    margin-left: 0px;
  }
  &: last-child {
    margin-right: 0px;
  }

  &:hover {
    ${({ isActive }) =>
      isActive
        ? css`
            animation: none;
          `
        : css`
            animation-name: ${vibration};
            animation-duration: 0.1s;
            animation-iteration-count: 3;
            animation-timing-function: ease-out;
          `};
  }

  max-height: 100vh;
  height: 300px;
  > div {
    flex-grow: 1;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  text-shadow: 1px 0 8px black;
  opacity: 0;
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    `}
`;

export const Description = styled.div`
  font-size: 18px;
  position: absolute;
  top: 70px;
  left: 20px;
  margin: 0;
  text-shadow: 1px 0 8px black;
  opacity: 0;
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transition: opacity 0.6s ease-in 0.8s;
    `}
`;


export const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
`;