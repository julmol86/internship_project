import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import i18n (needs to be bundled) 
import './i18n';

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
