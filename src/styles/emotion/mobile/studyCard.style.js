import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  box-sizing: border-box;
  padding: 0px 15px;
`

export const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 25px;
  background: url(${props => props.image}) no-repeat;
  background-size: 100%;
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  box-sizing: border-box;
  padding: 0px 10px;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 3px 0px;
`

export const Content = styled.pre`
  margin: 5px 0px;
  font-size: 12px;
   white-space: pre-wrap;
`