from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/get_advice', methods=['POST'])
def get_advice():
    data = request.json
    query = data['query']
    advice = investment_advice_pipeline(query)  # Use the pipeline function you've already developed
    return jsonify({'advice': advice})

if __name__ == '__main__':
    app.run(debug=True, port=5001)

