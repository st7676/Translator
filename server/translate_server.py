from flask import Flask, request, jsonify
from flask_cors import CORS
import argostranslate.package
import argostranslate.translate
import os

# טען את כל קבצי המודלים מתיקיית models/
models_dir = "models"
for filename in os.listdir(models_dir):
    if filename.endswith(".argosmodel"):
        argostranslate.package.install_from_path(os.path.join(models_dir, filename))

# טען את השפות שהותקנו
argostranslate.translate.load_installed_languages()
installed_languages = argostranslate.translate.get_installed_languages()

app = Flask(__name__)
CORS(app)  # מאפשר CORS לכל המקורות

@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    from_code = data.get("from", "en")
    to_code = data.get("to", "he")
    text = data.get("text", "")

    from_lang = next((lang for lang in installed_languages if lang.code == from_code), None)
    to_lang = next((lang for lang in installed_languages if lang.code == to_code), None)

    if not from_lang or not to_lang:
        return jsonify({"error": "Unsupported language code"}), 400

    translation = from_lang.get_translation(to_lang)
    translated_text = translation.translate(text)

    return jsonify({"translatedText": translated_text})

if __name__ == "__main__":
    app.run(port=5001, debug=True)