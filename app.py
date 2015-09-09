import json
import requests
from flask import Flask, request, url_for,render_template


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

@app.errorhandler(404)
def page_not_found(e):
  return app.send_static_file('404.html'),404

app.run(debug=True)
