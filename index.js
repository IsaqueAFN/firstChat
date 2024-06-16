const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const ws = require('ws')
const app = express()
const { v4:uuidv4 } = require('uuid')
const URL = 'https://firstchat-1.onrender.com'
const axios = require('axios')

const connectUsers = new Map()

app.use(cors())
app.use(bodyParser.json())

const serverWS = new ws.Server({
    port: process.env.PORT || 8080
})

serverWS.on('connection', async (ws) => {
    const id = uuidv4()
    console.log('Cliente Conectado')
    connectUsers.set(id, ws)
    console.log(connectUsers.keys())
    try{
        const messagesToSend = await GetMessages()
        console.log(messagesToSend)
        ws.send(JSON.stringify(messagesToSend))
    }catch(error){
        console.error(error)
    }

    ws.on('message', (sended) => {
        const sendUsers = Array.from(connectUsers.values()).filter(element => element !== ws)
        const sender = Array.from(connectUsers.values()).filter(element => element === ws)
        const objSended = JSON.parse(sended)
        PostMessage(objSended)
        sendUsers.forEach(element => {
            const objSend = {message: objSended.message, send: objSended.send}
            element.send(JSON.stringify(objSend))
        }
    )
        sender.forEach(element => {
            const objSend = {message: objSended.message}
            element.send(JSON.stringify(objSend))
        })
    })

    ws.on('close', () => {
        console.log('Cliente Desconectado')
        connectUsers.delete(id)
        console.log(connectUsers.keys())
    })
})

function PostMessage(valueToPost){
    axios.post(URL + '/messages/postmessage', valueToPost)
        .then(console.log('Sucess'))
        .catch(error => console.error('Error: ' + error))
}

function ChangeMessage(valueToChange){
    axios.put(URL + '/messages/changemessage', valueToChange)
        .then(console.log('Sucess'))
        .catch(error => console.error(error))
}

function DeleteMessage(idToDelete){
    axios.delete(URL + '/messages/deletemessage', idToDelete)
        .then(console.log('Sucess'))
        .catch(error => console.error(error))
}

async function GetMessages(){
    return axios.get(URL + '/messages')
        .then(response => response.data)
        .catch(error => console.error(error))
}