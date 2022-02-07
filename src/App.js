import { HashRouter, Route, Routes } from 'react-router-dom';
import ico from './assets/icon/favicon.ico';
import Home from './pages/Home';
import MisObras from './pages/MisObras';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BtnScrollTop from './components/BtnScrollTop';
import useScrollTop from './hooks/useScrollTop';
import ScrollToTop from './components/ScrollToTop';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import BtnDarkMode from './components/BtnDarkMode';
import { GlobalStyle } from './components/CreateGlobalStyle';
import { Helmet } from 'react-helmet';
import homeImg from './assets/img/homeImg.jpg';

AOS.init({
  duration: 1500,
});

function App() {
  const { theme } = useContext(ThemeContext);

  const { toTop, scrollTop, setScrollTop } = useScrollTop();
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://adrianastiglianoarte.netlify.app" />
        <meta name="theme-color" content="#e0aaff" />
        <title>Bienvenid@</title>
        <link rel="icon" type="image/x-icon" href={ico} />
        <link rel="apple-touch-icon" href={ico} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        {/*         <meta
          property="og:url"
          name="twitter:url"
          content={`https://adrianastiglianoarte.netlify.app${window.location.hash}`}
        /> */}
        <title>Portafolio Artístico | Adriana Stigliano</title>
        <meta name="title" content="Portafolio Artístico | Adriana Stigliano" />
        <meta
          name="description"
          content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adrianastiglianoarte.netlify.app/"
        />
        <meta
          property="og:title"
          content="Portafolio Artístico | Adriana Stigliano"
        />
        <meta
          property="og:description"
          content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
        />
        <meta property="og:image" content={homeImg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://adrianastiglianoarte.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="Portafolio Artístico | Adriana Stigliano"
        />
        <meta
          property="twitter:description"
          content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
        />
        <meta property="twitter:image" content={homeImg} />
      </Helmet>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          {/* <Route path="/exposiciones" element={<Exposiciones />} /> */}
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
      <BtnDarkMode />
    </>
  );
}

export default App;
