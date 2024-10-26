import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// 아래로 이동하는 애니메이션을 정의합니다.
export const dropAnimation = keyframes`
  0% {
    transform: translateY(80px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 텍스트가 서서히 나타나는 애니메이션을 정의합니다.
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Circle = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: white;
    border-radius: 50%;
    margin: 20px 0px;
    animation: ${dropAnimation} 0.5s ease-in-out forwards;
    opacity: 0;
    animation-delay: ${props => props.delay}s;
`;

export const AnimatedText = styled.h1`
    font-size: ${props => props.size};
    color: white;
    margin: 0px 0px;
    animation: ${fadeIn} 1.6s ease-in-out forwards;
    opacity: 0;
    animation-delay: 1.7s; /* 모든 Circle 애니메이션 이후에 나타나도록 딜레이 설정 */
`;