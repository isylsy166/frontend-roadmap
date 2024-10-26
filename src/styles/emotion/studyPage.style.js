import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const showCardBox = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


export const Frame = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #272727, #e2efff);
    box-sizing: border-box;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-family: 'MonoplexKRWide-BoldItalic';
    color: white;
    font-size: 70px;
    opacity: ${props => (props.show ? 1 : 0)}; // show에 따라 opacity 설정
    animation: ${props => props.show ? css`${fadeIn} 2.5s ease-in-out forwards` : 'none'};
`

export const CardBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 985px;
    opacity: 0;
    animation: ${props => props.show ? css`${showCardBox} 3.5s ease-in-out forwards` : 'none'};
`