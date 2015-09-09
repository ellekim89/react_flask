import json
import requests
from flask import Flask, url_for

app = Flask(__name__)

@app.route('/lifedecision')
def api():
  url = requests.get('http://yesno.wtf/api')
  api = json.dumps(url.json())
  return api


app.run(debug=True)

