import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

export const Card = styled.div`
  display: flex;
  width: 450px;
  height: 150px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: white;
`

export const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 25px;
  background: url(${props => props.image}) no-repeat;
  background-size: 100%;
  margin: 0px 15px;
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  
`

export const Content = styled.pre`
  margin: 5px 0px;
  font-size: 12px;
`