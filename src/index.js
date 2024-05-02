import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/globalStyles';
import {ToastContainer} from "react-toastify"
import Routes from './routes/routes';

import  AppProvider  from './hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


  <>
  <AppProvider>
  <Routes/>
  </AppProvider>
  <ToastContainer autoClose={3000} theme='colored'/>
  <GlobalStyles/>

  </>,

  




  </React.StrictMode>
);



