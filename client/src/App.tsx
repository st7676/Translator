import React from 'react';
import TranslateComponent from './components/TranslateComponent';

const App: React.FC = () => {
    return (
        <div>
            <h1>Text Translator</h1>
            <TranslateComponent />
        </div>
    );
};

export default App;



// src/App.tsx
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import axios from 'axios';
// import i18next from 'i18next';

// const App: React.FC = () => {
//     const { t } = useTranslation();
//     const [translatedText, setTranslatedText] = React.useState<string>('');

//     const handleTranslate = async () => {
//         try {
//             const response = await axios.post('http://localhost:5001/translate', {
//                 text: t('text')
//             });
//             setTranslatedText(response.data.translatedText);
//         } catch (error) {
//             console.error('Error translating text:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>{t('header')}</h1>
//             <p>{t('text')}</p>
//             <button onClick={handleTranslate}>{t('button')}</button>
//             {translatedText && <div>Translated Text: {translatedText}</div>}
//             <button onClick={() => i18next.changeLanguage('he')}>עברית</button>
//             <button onClick={() => i18next.changeLanguage('en')}>English</button>
//         </div>
//     );
// };

// export default App;