import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyles';
import { theme } from 'theme/mainTheme';
import Header from 'components/Header/Header';

const MainWrapper = styled.div`
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header />
        </MainWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
