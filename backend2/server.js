require("dotenv").config();
const express = require("express")
// const cors = require('cors')
const http = require('http')
const socket = require('socket.io')

const connectDB=require('./config/db')
connectDB()

const Message = require('./models/message')

const  app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(cors())


const server = http.createServer(app)
const PORT = process.env.NODE_PORT||8000
const io = socket(server,{
    cors: {
        origin: "*" ,
        methods: ['GET','POST']
    }
})


async function getLastMessagesFromRoom(room){
    let roomMessages = await Message.aggregate([
        {$match: {to: room}},
        {$group: {_id: '$date',messagesByDate:{$push: '$$ROOT'}}}
    ])
    return roomMessages
}

function sortRoomMessagesByDate(messages){
    return messages.sort(function(a,b){
        let date1 = a._id.split('/')
        let date2 = b._id.split('/')

        date1 = date1[2] + date1[0] + date1[1]
        date2 = date2[2] + date2[0] + date2[1]

        return date1 < date2 ? -1 : 1
    })
}

//socket connection
io.on('connection',(socket)=>{

    socket.on('new-user',async ()=>{
        const member = await User.find()
        io.emit('new-user', member)
    })

    socket.on('join-room', async (newRoom, prevRoom) => {
        socket.join(newRoom)
        socket.leave(prevRoom)
        let roomMessages = await getLastMessagesFromRoom(newRoom)
        roomMessages = sortRoomMessagesByDate(roomMessages)
        socket.emit('room-messages',roomMessages)
    })

    socket.on('message-room',async(room, content, sender, time, date)=>{
        
        const newMessage = await Message.create({content, from:sender, time, date, to:room})
        let roomMessages = await getLastMessagesFromRoom(room)
        roomMessages = sortRoomMessagesByDate(roomMessages)
        //sending message to room
        io.emit('room-messages',roomMessages)
    })

})

server.listen(PORT,()=>{
    console.log('listening to post',PORT)
})