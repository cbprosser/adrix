/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { App } from './App';
import { appHistory } from './appHistory';
import { store } from './redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      {/* @ts-expect-error see https://github.com/remix-run/react-router/issues/9422#issuecomment-1302146568 */}
      <HistoryRouter history={appHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
