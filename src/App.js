import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyles';
import { theme } from 'theme/mainTheme';
import Header from 'components/Header/Header';
import Gallery from 'components/Gallery/Gallery';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header />
          <Gallery />
        </MainWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
