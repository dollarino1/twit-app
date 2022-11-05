import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import { setupStore } from './store/store';
import mainTheme from "./styles/main";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from 'notistack'

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <SnackbarProvider anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }} autoHideDuration={5000}>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
