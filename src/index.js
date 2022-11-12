import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

let posts = [
  { id: 1, message: 'Hello', likeCounter: 10 },
  { id: 2, message: 'How are you?', likeCounter: '20' }
];
let dialogs = [
  { id: 1, name: 'Sergey' },
  { id: 2, name: 'Alesya' },
  { id: 3, name: 'Milana' },
  { id: 4, name: 'Timosha' },
  { id: 5, name: 'Arina' }
];
let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Who are you?' },
  { id: 4, message: 'Where are you?' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>
);
