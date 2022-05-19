from flask import Flask, jsonify
from flask_cors import CORS
from handlers import switch

api = Flask(__name__)
CORS(api)

@api.route('/test/<int:random_int>', methods=['GET'])
def get_corresponding_letter(random_int):
    value = switch(random_int)
    output = value if value != "" else random_int
    return jsonify({'output': output})

if __name__ == '__main__':
    api.run()