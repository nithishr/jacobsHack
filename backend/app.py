from flask import Flask, request
from telethon import TelegramClient, events, sync, utils
from telethon import functions, types
from telethon.tl.functions.messages import GetDialogsRequest
from telethon.tl.types import InputPeerEmpty
from telethon.tl.types import PeerUser, PeerChat, PeerChannel, InputPeerUser, InputPeerChat, InputPeerChannel
from telethon.tl.types.messages import Messages
import json
from slacker import Slacker
import os
from pymongo import MongoClient
import asyncio
from datetime import timezone
from algoliasearch import algoliasearch

app = Flask(__name__)
slack = Slacker(os.getenv('SLACK_KEY'))
conn_string = "mongodb://jhack:abcd1234#@ds151513.mlab.com:51513/message-hub"
client = MongoClient(conn_string)
db = client.get_database()
messages_db = db['messages']
client = algoliasearch.Client("FLBYK5GQ8Z", 'e5f2da5cd1089729b8f4b5633e9fec41')
index = client.init_index('messages')


api_id = 632827
api_hash = '2bf8105b9536dbb821d61d00c621c16f'

phone = '004915234723254'
username = 'whoiscris'

client = TelegramClient(username, api_id, api_hash)
client.connect()

# Ensure you're authorized
if not client.is_user_authorized():
    client.send_code_request(phone)
    try:
        client.sign_in(phone, input('Enter the code: '))
    except SessionPasswordNeededError:
        client.sign_in(password=input('Password: '))

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/count', methods=['GET'])
def get_message_counts_by_day():
    sender_receiver_to_messages = {}
    global api_id, messages_db
    for x in messages_db.find({"user": "Cris"}):
        print(x)

    return 'Ok'



@app.route('/telegram-hose', methods=['POST'])
def get_telegram_msgs():
    global api_id

    get_dialogs = GetDialogsRequest(
        offset_date=None, # datetime.datetime(2018, 10, 4),
        offset_id=0,
        offset_peer=InputPeerEmpty(),
        limit=100,
        hash=api_id,
    )
    dialogs = client(get_dialogs)

    for u in dialogs.users:
        if u.username is not None:
            for message in client.iter_messages(u.username, limit=1000):
                payload = {}
                sender_first_name = message.sender.first_name if message.sender.first_name else ""
                sender_last_name = message.sender.last_name if message.sender.last_name else ""
                sender_username = message.sender.username if message.sender.username else ""
                print(
                        message.date, ":",
                        sender_first_name, sender_last_name, sender_username,
                        message.message,
                        )

                msg = message.message
                user_id = message.from_id
                user_name = sender_first_name
                if sender_last_name:
                    user_name += ',' + sender_last_name
                timestamp = int(message.date.replace(tzinfo=timezone.utc).timestamp())
                channel_id = message.id
                payload['message'] = msg
                payload['timestamp'] = timestamp
                payload['user'] = user_name
                payload['type'] = 'telegram'
                print(payload)
                result = messages_db.insert_one(payload)
                index.add_object(payload)
                index.set_settings({"searchableAttributes": ["channel", "message", "user",
                                                             "type"]})
    return 'Ok'
    


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
        index.add_object(payload)
        index.set_settings({"searchableAttributes": ["channel", "message", "user",
                                                     "type"]})
        return 'Ok'

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
