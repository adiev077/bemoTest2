import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';
import CeraRoundProBold from './assets/fonts/CeraRoundProBold.ttf';
import "./index.css"

const loadFont = () => {
  const ceraFont = new FontFace('CeraRoundProBold', `url(${CeraRoundProBold}) format('truetype')`);

  ceraFont.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
    document.body.style.fontFamily = 'CeraRoundProBold, sans-serif';
  }).catch((error) => {
    console.error("Ошибка загрузки шрифта:", error);
  });
};

loadFont();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
