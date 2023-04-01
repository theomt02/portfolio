// React
import { useEffect, useState } from "react";
// Router
import { useLocation } from "react-router-dom";
// Style
import { GlobalStyles } from "./style/Global";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./style/Theme";

// Components
import Header from "./components/Header";
// import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  // Set default theme & init state
  const [loadedTheme, setLoadedTheme] = useState(themes[1].theme);
  const [currentTheme, setCurrentTheme] = useState({
    name: "light",
    color: loadedTheme.light,
  });
  const [currentDate, setCurrentDate] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    if (currentTheme.name === "light") {
      setCurrentTheme({ name: "light", color: loadedTheme.light });
    } else {
      setCurrentTheme({ name: "dark", color: loadedTheme.dark });
    }
    // eslint-disable-next-line
  }, [loadedTheme]);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setHeaderVisible(false);
    }
  }, [location]);

  useEffect(() => {
    if (!headerVisible) {
      setHeaderVisible(true);
    }
  }, [headerVisible]);

  return (
    <ThemeProvider theme={currentTheme.color}>
      <AppS>
        <GlobalStyles />
        <Header
          setCurrentTheme={setCurrentTheme}
          currentTheme={currentTheme}
          setCurrentDate={setCurrentDate}
          currentDate={currentDate}
          setHeaderVisible={setHeaderVisible}
          headerVisible={headerVisible}
          loadedTheme={loadedTheme}
          setLoadedTheme={setLoadedTheme}
        />
        <AnimatedRoutes />
        {/* <Footer /> */}
      </AppS>
    </ThemeProvider>
  );
}

export default App;

const AppS = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  position: relative;
  margin: 0;
  padding: 0;
  div {
    max-width: 100%;
  }
`;
