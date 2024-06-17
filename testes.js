const WebSocket = require('ws')

const WebSockets = new WebSocket('ws://firstchat.onrender.com')

WebSockets.on('open', () => {
    console.log('Client connected')
    WebSockets.send('.')

    setTimeout(() => {
        WebSockets.close()
    }, 10000)
})

WebSockets.on('close', () => {
    console.log('Closed')
})

WebSockets.on('error', (err) => {
    console.log(err)
    process.exit(1)
})