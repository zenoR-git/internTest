# CHAT app backend

This is the backend for developing a chat application.<br>
TECH stack: `Socket.io`, `express`, `mongodb`, `nodejs`

<hr>

### Events

* `join-room` : 
  * Used to join rooms before sending a message.
  * Can be used to implement groups and private chats as socket Id are itself a room in socket.io.

* `room-messages` : 
  * Gets all the message from the room from the database.
  * Must be called from the frontend side to get all previous messages.

* `message-room` : 
  * Used to send message in a group chat or private chat (as individual socket id are also a room in sockt.io).

<hr>
 ⚠️  Note:<br>
 This is only the backend, to use it, frontend that would utilize the above events using socket.io client library is required.
