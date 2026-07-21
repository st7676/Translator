from flask import Flask, request, jsonify
from flask_cors import CORS

import argostranslate.package
import argostranslate.translate

import os


app = Flask(__name__)
CORS(app)


# ==========================
# התקנת מודלים
# ==========================

models_dir = "models"

for filename in os.listdir(models_dir):
    if filename.endswith(".argosmodel"):
        path = os.path.join(models_dir, filename)

        print("Installing:", filename)

        try:
            argostranslate.package.install_from_path(path)
        except Exception as e:
            print("Install error:", e)


# ==========================
# טעינת שפות
# ==========================

argostranslate.translate.load_installed_languages()

installed_languages = argostranslate.translate.get_installed_languages()


print("Installed languages:")
for lang in installed_languages:
    print(lang.code, lang.name)


print([
    (lang.code, lang.name)
    for lang in installed_languages
])


# ==========================
# API
# ==========================

@app.route("/translate", methods=["POST"])
def translate():

    data = request.get_json()

    from_code = data.get("from", "en")
    to_code = data.get("to", "ar")
    text = data.get("text", "")


    from_lang = next(
        (x for x in installed_languages if x.code == from_code),
        None
    )

    to_lang = next(
        (x for x in installed_languages if x.code == to_code),
        None
    )


    if not from_lang or not to_lang:
        return jsonify({
            "error": "Unsupported language code",
            "available": [
                x.code for x in installed_languages
            ]
        }), 400


    translation = from_lang.get_translation(to_lang)

    result = translation.translate(text)


    return jsonify({
        "translatedText": result
    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5001,
        debug=True
    )
