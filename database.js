const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const messages = []

app.get('/messages', (req, res) => {
    res.send(JSON.stringify(messages))
})

app.post('/messages/postmessage', (req, res) => {
    messages.push({message: req.body.message, send: req.body.send, id:messages.length + 1})
})

app.put('/messages/changemessage', (req, res) => {
    const idx = messages.findIndex(data => data.id === req.body.id)
    messages[idx].message = req.body.message
})

app.delete('/messages/deletemessage', (req,res) => {
    const idx = messages.indexOf(data => data.id === req.body.id)
    messages.splice(idx, 1)
})

app.listen(process.env.PORT || 3030, () => {
    console.log('DataBase rodando!')
})