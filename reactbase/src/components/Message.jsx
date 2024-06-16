import './Message.css'
import { useRef, useState, useContext } from 'react'
import XBlack from '../Images/XBlack.png'
import { FuncSendMSG } from '../context/SendMSGContext'
import { LoginInfo } from '../context/LoginContext'

function Message(props){
    const [select, setSelect] = useState(false)
    const refMessage = useRef(null)
    const refX = useRef(null)

    const { setMessage } = useContext(FuncSendMSG)

    const { loginName, setLoginName } = useContext(LoginInfo)

    function SelectMessage(){
        if(props.send && !select){ 
            setSelect(!select)
            // refX.current.style.display = 'flex'

        }else if(!select){
            setSelect(!select)
            // refX.current.style.display = 'flex'
        }else if(props.send && select){
            setSelect(!select)
            // refX.current.style.display = 'none'
        }else{
            setSelect(!select)
            // refX.current.style.display = 'none'
        }
    }

    function DeleteMessage(){
        setMessage(message => message.filter(value => value))
    }

    return(
        <div className='divAllMessage'>
            {/* <div ref={refX} className={props.send ? 'divDeleteMessage' : 'divDeleteMessageSend'}>
                    <img src={XBlack}/>
            </div> */}
            <div onClick={SelectMessage} ref={refMessage} className={props.send === loginName || !props.send ? 
                (select ? 'divMessagesSendSelect' : 'divMessagesSend') :
                (select ? 'divMessageSelect' : 'divMessage')}>
                <p className='sendName'>{props.send === loginName || !props.send ? '' : props.send}</p>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message