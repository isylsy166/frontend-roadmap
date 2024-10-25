import React from 'react';
import style from '../../../../css/layout/mainText.module.css';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// 아래로 이동하는 애니메이션을 정의합니다.
const dropAnimation = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 텍스트가 서서히 나타나는 애니메이션을 정의합니다.
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Circle = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: white;
    border-radius: 50%;
    margin: 20px 0px;
    animation: ${dropAnimation} 0.5s ease-in-out forwards;
    opacity: 0;
    animation-delay: ${props => props.delay}s;
`;

const AnimatedText = styled.h1`
  animation: ${fadeIn} 1s ease-in-out forwards;
  opacity: 0;
  animation-delay: 2s; /* 모든 Circle 애니메이션 이후에 나타나도록 딜레이 설정 */
`;

export default function MainText() {
  return (
    <div className={style.frame}>
      <Circle size={30} delay={0.2} />
      <Circle size={25} delay={0.4} />
      <Circle size={20} delay={0.6} />
      <Circle size={15} delay={0.8} />
      <Circle size={10} delay={1.0} />
      <AnimatedText>Frontend Devloper</AnimatedText>
      <AnimatedText>Roadmap</AnimatedText>
    </div>
  );
}
