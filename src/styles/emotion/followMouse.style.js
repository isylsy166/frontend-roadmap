import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const sizeUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2.5);
  }
`;

const sizeDown = keyframes`
  0% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const Cursor = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none; /* 커서 요소와의 상호작용 방지 */
    background-color: #ffc0cbc6;
    animation: ${props => props.isHover ? sizeUp : sizeDown} 0.5s ease-in-out forwards;
`