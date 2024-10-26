import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    transform: translateX(80px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 1;
  }
`

export const Frame = styled.div`
    width: 300px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
`

export const Title = styled.h1`
    font-family: 'MonoplexKRWide-BoldItalic';
    color: white;
    font-size: 70px;
    position: absolute;
    transform: translate(-50%, 0%);
    top: 8%;
    left: 50%;
    opacity: ${props => (props.show ? 1 : 0)}; // show에 따라 opacity 설정
    animation: ${props => props.show ? css`${fadeIn} 2.5s ease-in-out forwards` : 'none'};
`