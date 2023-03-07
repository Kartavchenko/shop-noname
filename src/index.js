import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor  } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename='/shop-noname/'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Suspense>
);
