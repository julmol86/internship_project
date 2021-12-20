import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import i18n (needs to be bundled) 
import './i18n';
import { LanguageContextProvider } from './LanguageContext';

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <LanguageContextProvider>
        <Suspense fallback={<h1>Loading...</h1>}>
          <App />
        </Suspense>
      </LanguageContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
