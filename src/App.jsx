import { createGlobalStyle } from 'styled-components';
import './App.css';
import Router from './Router';

export const theme = {
    bgColor : '#ffeae4',
    accentColor: '#f9724a'
}

const GlobalStyle = createGlobalStyle`

  body{
    background-color: ${theme.bgColor};
    transition: all 1s ease;
  }

`

function App() {

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
