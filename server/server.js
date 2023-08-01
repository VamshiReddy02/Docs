const { Socket } = require('socket.io')

const io = require('socket.io')(3009, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
    },
})

io.on("connection", Socket=> {
    console.log("connect")
})