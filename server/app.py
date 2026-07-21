from flask import Flask, request, jsonify
from deep_translator import GoogleTranslator

app = Flask(__name__)

app.json.ensure_ascii = False

@app.route('/api', methods=['GET'])
def home():
    return jsonify({'message': 'hello world'})

@app.route('/api/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    
    if not data or 'text' not in data:
        return jsonify({'error': 'Missing text parameter'}), 400
    
    text_to_translate = data['text']
    
    try:
        translated = GoogleTranslator(source='auto', target='iw').translate(text_to_translate)
        return jsonify({'translated_text': translated})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
