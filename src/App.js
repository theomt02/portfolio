// React
import { useState, useEffect } from "react";
// Router
import { Routes, Route } from "react-router-dom";
// Style
import { GlobalStyles } from "./style/Global";
import styled, { ThemeProvider } from "styled-components";
import { light } from "./style/Theme";

// Components
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Coffee from "./pages/Coffee";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  // Set default theme & init state
  const [currentTheme, setCurrentTheme] = useState({
    name: "light",
    color: light,
  });
  const [currentDate, setCurrentDate] = useState(null);

  return (
    <ThemeProvider theme={currentTheme.color}>
      <AppS>
        <GlobalStyles />
        <Header
          setCurrentTheme={setCurrentTheme}
          currentTheme={currentTheme}
          setCurrentDate={setCurrentDate}
          currentDate={currentDate}
        />
        <Routes>
          <Route path="/" element={<Home date={currentDate} />} />
          <Route path="about" element={<About />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppS>
    </ThemeProvider>
  );
}

export default App;

const AppS = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
