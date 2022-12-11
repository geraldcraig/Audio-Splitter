from spleeter.separator import Separator
from flask import Flask

app = Flask(__name__)


@app.route('/stems/2')
def two_stems():  # put application's code here
    return stems()


def stems():
    # Using embedded configuration.
    separator = Separator('spleeter:4stems')

    audio_file = "audio_example.mp3"
    folder = "output4"
    separator.separate_to_file(audio_file, folder)

    return "4 files processed"


if __name__ == '__main__':
    app.run()
