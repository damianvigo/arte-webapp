import { HashRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/CreateGlobalStyle';
import Home from './pages/Home';
import MisObras from './pages/MisObras';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BtnScrollTop from './components/BtnScrollTop';
import useScrollTop from './hooks/useScrollTop';
AOS.init({
  duration: 1500,
});

function App() {
  const { toTop, scrollTop, setScrollTop } = useScrollTop();
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/exposiciones" element={<Conoceme />} /> */}
          <Route path="/mis-obras" element={<MisObras />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <BtnScrollTop
        toTop={toTop}
        scrollTop={scrollTop}
        setScrollTop={setScrollTop}
      />
    </>
  );
}

export default App;
