import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
