import React, { useState } from 'react';
import axios from 'axios';

const TranslateComponent: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [translatedText, setTranslatedText] = useState<string>('');

    const handleTranslate = async () => {
        try {
            const response = await axios.post('http://localhost:5001/translate', {   
                from: 'en',
                to: 'he',
                text: text,
            });
            console.log(response.data.translatedText);
            setTranslatedText(response.data.translatedText);

        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate"
            />
            <button onClick={handleTranslate}>Translate</button>
            {translatedText && <div>Translated Text: {translatedText}</div>}
        </div>
    );
};

export default TranslateComponent;
