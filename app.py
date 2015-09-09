import json
from flask import Flask, request, url_for


app = Flask(__name__)

@app.route('/')
def index():
  return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_path(path):
  return app.send_static_file(path)

@app.route('/lifedecision')
def api():
  url = requests.get('http://yesno.wtf/api')
  api = json.dumps(url.json())
  return api

app.run(debug=True)
