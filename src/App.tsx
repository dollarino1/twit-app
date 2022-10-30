import React from 'react';
import {ThemeProvider} from "@mui/material";
import mainTheme from './styles/main';

function App() {
  return (
      <ThemeProvider theme={mainTheme}>
          <div className="App">
              asdsksssss
          </div>
      </ThemeProvider>

  );
}

export default App;
