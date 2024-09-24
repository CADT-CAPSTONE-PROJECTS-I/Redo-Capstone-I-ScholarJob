from flask import Flask
from collaborative import cf_recommend
from content_based import cbf_recommend
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5173"}})

@app.route('/', methods=['GET'])
def index():
    return 'Welcome to the Job Recommendation System!'

# Register routes
app.add_url_rule('/collaborative', view_func=cf_recommend, methods=['POST'])
app.add_url_rule('/content_based', view_func=cbf_recommend, methods=['POST'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)




