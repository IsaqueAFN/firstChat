import './Chat.css'
import ArrowWhite from '../Images/ArrowRightWhite.png' 
import ChatHeader from './ChatHeader'
import Message from '../components/Message.jsx'
import { useRef, useContext, useEffect, useState, createContext } from 'react'
import { FuncSendMSG } from '../context/SendMSGContext.jsx'
import { LoginInfo } from '../context/LoginContext.jsx'
import GroupWhite from '../Images/GroupWhite.png'


function Chat(msg, sender){

    const refMSG = useRef(null)
    const refChat = useRef(null)
    const {message, messageSend, send, SendMSG} = useContext(FuncSendMSG)
    const [messageChat, setMessageChat] = useState([])

    const {loginName, setLoginName} = useContext(LoginInfo)

    useEffect(() => {
        messageSend[0]?.message ? messageSend.map(value => {
            setMessageChat(prevmessage => [...prevmessage, value])
        })
        : setMessageChat(prevmessage => [...prevmessage, messageSend])
    }, [messageSend])

    function btnSendMessage(){
        SendMSG({message: refMSG.current.value, id: messageChat.length + 1, send: loginName})
        refMSG.current.value = ''
    }

    return(
        <div className="chatLocal">
            <div className="divChatHeader">
                <ChatHeader image={GroupWhite} conctact={'Global Chat'} />
            </div>

            <div className='chat' ref={refChat}>
                {messageChat.map((val, index) => {
                    if(val.message !== undefined){  
                        return (<Message message={val.message} send={val.send} key={index}/>)
                    }
                })}
            </div>

            <div className='divSendMessage'>
                <input placeholder='Digite a mensagem...' ref={refMSG}/>
                <button onClick={btnSendMessage}>
                    <img src={ArrowWhite}/>
                </button>
            </div>
        </div>
    )
}
export default Chat