import { useMediaQuery } from 'react-responsive';
import LayoutMobile from './pages/layout/mobile/layoutMobile';
import LayoutPc from './pages/layout/pc/layoutPc';

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:580px)"
  });
  return <>{isMobile && children}</>
}

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:581px)"
  });
  return <>{isPc && children}</>
}


function App() {

  return (
    <>
      <Mobile>
        <LayoutMobile/>
      </Mobile>

      <Pc>
        <LayoutPc/>
      </Pc>
    </>
  );
}

export default App;
