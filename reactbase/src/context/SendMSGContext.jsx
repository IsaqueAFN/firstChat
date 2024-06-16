import { createContext, useEffect, useRef, useState } from "react"
import Home from "../pages/Home"

export const FuncSendMSG = createContext(null)

function SendMSGContext(){
    const [message, setMessage] = useState([])
    const [send, setSend] = useState(null)
    const [messageSend, setMessageSend] = useState({})
    const [start, setStart] = useState(false)
    const [user, setUser] = useState('')
    const wss = useRef(null)
    useEffect(() => {
        if(start === true){
            ws.current = new WebSocket('wss:https://firstchat.onrender.com:8080')
            
            ws.current.onopen = () => {
                console.log('Conectado')
            }       
            
            ws.current.onmessage = async (content) => {
                try{
                    const objContent = JSON.parse(content.data)
                    if(objContent[0]){
                            setMessageSend(() => {
                                return objContent
                            })  
                        }else{
                            setMessage(() => {
                                const message = objContent.message
                                return message
                            })
                            setSend(() => {
                                const send = objContent.send
                                return send
                            })
                            setMessageSend(() => {
                                const content = objContent
                                return {message: content.message, send: content.send}
                            })
                    }
                }
                catch(error){
                    console.error(error)
                }
                
            }
    
            ws.current.onclose = () => {
                console.log('Desconectado')
            }
    
            return(() => {
                ws.current.close()
            })
        }
    }, [start])

    function SendMSG(msg){
        if(msg.message.trim() !== ''){
            ws.current.send(JSON.stringify({message: msg.message, send: msg.send, id:msg.id}))
            setMessage(msg)
        }
    }

    const Sends = {
        SendMSG,
        message,
        send,
        messageSend,
        setStart,
        start,
        setUser
    }

    return(
        <FuncSendMSG.Provider value={Sends}>
            <Home/>
        </FuncSendMSG.Provider>
    )
}

export default SendMSGContext
