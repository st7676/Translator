import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n
//     .use(initReactI18next)
//     .init({
//         resources: {
//             en: {
//                 translation: {
//                     "header": "Welcome to the Translation App",
//                     "button": "Translate",
//                     "text": "This is a sample text to translate."
//                 }
//             },
//             he: {
//                 translation: {
//                     "header": "ברוך הבא לאפליקציית התרגום",
//                     "button": "תרגם",
//                     "text": "זהו טקסט לדוגמה לתרגום."
//                 }
//             }
//         },
//         lng: "en", // שפה ברירת מחדל
//         fallbackLng: "en",
//         interpolation: {
//             escapeValue: false // לא נדרש ב-React
//         }
//     });

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
