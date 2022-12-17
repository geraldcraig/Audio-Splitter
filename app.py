from spleeter.separator import Separator
from flask import Flask, request
import os

app = Flask(__name__)


@app.route('/cli', methods=['POST'])
def process_audio_cli():
    request_data = request.get_json()

    os.system('spleeter separate -p ' + request_data['stems'] + ' -o ' + request_data['folder'] + ' ' + request_data['file'])

    return 'audio processed', 201


@app.route('/library', methods=['POST'])
def process_audio_library():
    request_data = request.get_json()

    separator = Separator(request_data['stems'])

    separator.separate_to_file(request_data['file'], request_data['folder'])

    return 'audio processed', 201


if __name__ == '__main__':
    app.run()
