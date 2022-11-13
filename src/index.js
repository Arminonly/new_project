import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import state from './redux/state';
import { addPost } from './redux/state';
addPost('hello from index.js');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>
);
