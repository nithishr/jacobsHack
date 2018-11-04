from flask import Flask, request
import json
from slacker import Slacker
import os
from pymongo import MongoClient

app = Flask(__name__)
slack = Slacker(os.getenv('SLACK_KEY'))
conn_string = "mongodb://jhack:abcd1234#@ds151513.mlab.com:51513/message-hub"
client = MongoClient(conn_string)
db = client.get_database()
messages_db = db['messages']

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
        payload = {}
        try:
            message = in_req['event']['text']
        except:
            message = ''
        try:
            user_id = in_req['event']['user_id']
        except:
            user_id = ''
        user_details = slack.users.profile.get(user_id).body
        user_profile = user_details['profile']['real_name']
        user_pic_url = user_details['profile']['image_72']
        timestamp = in_req['event_time']
        try:
            channel_id = in_req['event']['channel']
        except:
            channel_id = in_req['event']['channel_id']
        if channel_id.startswith('C'):
            channel = slack.channels.info(channel_id).body['channel']['name']
        else:
            channel = 'Direct Message'
        if "files" in in_req['event']:
            payload['files'] = in_req['event']['files']
        payload['channel'] = channel
        payload['message'] = message
        payload['timestamp'] = timestamp
        payload['user'] = user_profile
        payload['user_profile'] = user_pic_url
        payload['type'] = 'slack'
        print(payload)
        result = messages_db.insert_one(payload)
        return 'Ok'

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
