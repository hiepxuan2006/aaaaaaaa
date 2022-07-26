import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './Component/GlobalStyle';
import { DataProvider } from './Component/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //<React.StrictMode>
   <GlobalStyle>
      <DataProvider>
         <App />
      </DataProvider>
   </GlobalStyle>,
   //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
