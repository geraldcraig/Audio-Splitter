from flask import Flask
import os

app = Flask(__name__)


@app.route('/stems/2')
def two_stems():  # put application's code here
    os.system("spleeter separate -p spleeter:2stems -o output2 audio_example.mp3")
    return "Two stems processed"


@app.route('/stems/4')
def four_stems():  # put application's code here
    os.system("spleeter separate -p spleeter:4stems -o output4 audio_example.mp3")
    return "Four stems processed"


@app.route('/stems/5')
def five_stems():  # put application's code here
    os.system("spleeter separate -p spleeter:5stems -o output5 audio_example.mp3")
    return "Five stems processed"


if __name__ == '__main__':
    app.run()