// -------------- Dependencies --------------------
const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')
// Declarating the sockets that I'll be using
const io = require('socket.io')(server, {
    // Need to use cors, otherwise we won't be able to use React
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})
// Using cors
app.use(cors())
// Port in use
const PORT = process.env.PORT || 5000
app.get("/", (req, res) => {
    res.send('Server is running')
})

// Socket connetion with Socket.io
io.on('connection', (socket) => {
    // Little message talking about the id  we want to call
    socket.emit('me', socket.id);
    // End call JAJAJAJ
    socket.on('disconnect', () => {
        socket.broadcast.emit("callended")
    })
    // Send data to user and call it
    socket.on("calluser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name })
    })

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal)
    })
})


server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))

