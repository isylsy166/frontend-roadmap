import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// 위로 나타나는 애니메이션
export const dropUp = keyframes`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Frame = styled.div`
    width: ${props => props.width};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 170px;
`

export const Icon = styled.img`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    border: 3px solid white;
    opacity: 0;
    animation: ${dropUp} 1s ease-in-out forwards;
    animation-delay: ${props => props.delay}s;
`