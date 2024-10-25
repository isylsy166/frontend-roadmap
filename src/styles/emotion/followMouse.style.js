import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const sizeUp = keyframes`
  0% {
    width: 70px;
    height: 70px;
  }
  100% {
    width: 250px;
    height: 250px;
  }
`;

const sizeDown = keyframes`
  0% {
    width: 250px;
    height: 250px;
  }
  100% {
    width: 70px;
    height: 70px;
  }
`;

export const Cursor = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none; /* 커서 요소와의 상호작용 방지 */
    background-color: #ffc0cbc6;
    z-index: 1;
    animation: ${props => props.isHover ? sizeUp : sizeDown} 0.5s ease-in-out forwards;
`