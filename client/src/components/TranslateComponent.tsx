import React, { useState } from 'react';
import axios from 'axios';

const TranslateComponent: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [translatedText, setTranslatedText] = useState<string>('');

    const handleTranslate = async () => {
        try {
            const response = await axios.post('/api/translate', {
                text: text,
            });
            // עדכון לשם המפתח המדויק שמוחזר מהשרת
            console.log(response.data.translated_text);
            setTranslatedText(response.data.translated_text);

        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div className="page">
            <div className="card">

                <textarea
                    className="input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to translate"
                />

                <button className="button" onClick={handleTranslate}>
                    Translate
                </button>

                {translatedText && (
                    <div className="result">
                        <h3>Translation:</h3>
                        <p>{translatedText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TranslateComponent;
