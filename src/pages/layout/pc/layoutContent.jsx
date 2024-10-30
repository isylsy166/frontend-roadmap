import React from 'react'
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { IoMdCloseCircle } from "react-icons/io";


export default function LayoutContent({children, showModal, setShowModal}) {
  return (
    <Back show={showModal}>
      <Frame show={showModal}>
        <Header>
          <IoMdCloseCircle size={30} color='gray' onClick={() => setShowModal(false)} />
        </Header>
        {children}
      </Frame>
    </Back>
  )
}

const Back = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #00000073;
  display: ${props => props.show ? 'block' : 'none'};
`

const Frame = styled.div`
  position: absolute;
  right: 0;
  width: 0;
  height: 100%;
  background-color: white;
  animation: ${props => props.show ? ShowLeft : HideRight} 0.5s ease-in-out forwards;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: flex-end;
  align-items: center;
`

const ShowLeft = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 40%;
  }
`

const HideRight = keyframes`
  0% {
    width: 40%;
  }
  100% {
    width: 0;
  }
`