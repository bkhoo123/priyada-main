# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin

# from .db import db

# class Chatbot(db.Model, UserMixin):
#   __tablename__ = 'chatbots'

#   id = db.Column(db.Integer, primary_key=True)
#   user_id = db.Column(db.Integer, db.ForeignKey('users.id'), ondelete="CASCADE" nullable=False)



#   ## user -> 1 to many with messages

#   ## messages [array of messages] user_id, chatbot_id Chat history 

#   ## chat_gpt -> 1 to many with messages

# ## waiting for a user to say something 
# ## the chat bot is waiting 24/7 for someone to talk to him

# @message_routes.route('/', methods=['POST'])
# @cross_origin()
# def chat():
#     data = request.get_json()
#     user_message = data['message']

#     url = 'https://api.openai.com/v1/chat/completions'
#     headers = {
#     'Content-Type': 'application/json',
#     'Authorization': f'Bearer {openai.api_key}' # Replace with your API key
#     }

#     ## system, user, assistant
#     # this is a lot of data from my database and im getting 10000 reports I want you to minimize the data and return this data to another GPT who will summarize that data for me
#     # Chat gpt 3.5 does the ffirst job. Chat GPT 4 to do the more important job

#     bot_response = {
#         "model":"gpt-3.5-turbo",
#         "messages": [
#             {
#                 "role": "system", ## what is your role as a chatbot what do you want me to do
#                 "content": 'You are a helpful chatbot but first I need you to infer the intent of the users query / question:
#                   "Depending on the intent of the user these are your choices. 
#                   "1. Is it a question about the schedule if so call this API {API variable / call function here}"
#                   "2. Is this a question about the website and what it is about. If so {this is the data about the website, its owner, its purpose, etc.}"
#                   '3. Is this a question about my account, appointmment ${finddatabyuserId}' the returned data on this api call will be in json you can use this data to answer the users query / questions.
#                   "
#                   "At the end of this I want you to console log in the terminal which number you chose"
#                 '
#             },

#             ## Role play between user and chatbot 

#             {
#                "role": "assistant",
#                "content": "Hello fellow dancers I am here to help you with any questions you may have about the website or the schedule. How can I help you today?"
#             }
#             {
#                 "role": "user",
#                 "content": f"{user_message}"
#             }
#         ],
#         "temperature": 1,
#         "n": 1,
#         "max_tokens": 150,
#     }

#     ## step 1 I receive message from frontned
#     ## step 2 I call ChatGPT API and send the message I received from frontend to ChatGPT
#     ## step 3 ChatGPT sees the backend instructions and what to do with this message 
#     ## step 4 ChatGPT returns the best response to the message I received from the frontend 
#     ## Step 5

#     # This part assumes you have already imported the `requests` library
#     response = requests.post(url, json=bot_response, headers=headers)
#     response_data = response.json()

#     message = Message(
#         user_id = data['user_id'],
#         message = user_message,
#         created_at = datetime.now(),
#     )
#     db.session.add(message)
#     db.session.commit()

#     chatGPTReply = response_data['choices'][0]['message']['content']

#     return jsonify({
#         'message': chatGPTReply
#     })

# [
#    brian: hi
#    chatGPT: best response to hi is hello
# ]

# useEffect(Checks if new message or state changed right)

# so state changed because new message
# message array gets updated

# findmessagebyUserid

# finds the message associated to user id with chatbot 

# pulls history from message

# inputs in message array
