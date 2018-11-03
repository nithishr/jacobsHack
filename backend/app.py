from flask import Flask, request
import json

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/slack-hose', methods=['POST'])
def get_slack_msgs():
    print(request)
    print(request.data)
    in_req = json.loads(request.data.decode('utf-8'))
    if "challenge" in in_req.keys():
        return in_req['challenge']
    else:
        print(in_req)
        return 'Ok'

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
