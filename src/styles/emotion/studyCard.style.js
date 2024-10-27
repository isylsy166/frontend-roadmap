import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

export const CardContainer = styled.div`
  perspective: 800px;
  width: 300px;
  height: 300px;

`;

export const Card = styled.div`
  display: inline-grid;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ isHovered }) => (isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  cursor: pointer;

  & > * {
    grid-area: 1 / 1 / 1 / 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    backface-visibility: hidden;
  }
`


export const Thumbnail = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightgray;
  border-radius: 45px;
  background: url(${props => props.image}) no-repeat;
  background-size: 100%;
`

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  
`

export const Content = styled.pre`
  font-size: 15px;
`