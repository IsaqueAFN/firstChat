import './Login.css'
import { useEffect, useRef, useContext } from 'react'
import { FuncSendMSG } from '../context/SendMSGContext'
import { LoginInfo } from '../context/LoginContext'

function Login(){

    const { setStart, setUser } = useContext(FuncSendMSG)
    const {loginName, setLoginName} = useContext(LoginInfo) 

    useEffect(() => {
        refInputLogin.current.focus()
    },[])

    const refInputLogin = useRef(null)

    function sendLogin(){
        if(refInputLogin.current.value.trim() !== ''){
            setLoginName(refInputLogin.current.value)
            setUser(refInputLogin.current.value)
            setStart(true)
        }else{
            alert('Please, enter a valid name!')
        }
    }

    return(
        <div className='divLogin'>
            <div className="formLogin">
                <h1>Login</h1>
                <label htmlFor="user">Username</label>
                <input id="user" ref={refInputLogin}/>
                <button onClick={sendLogin}>Send</button>
            </div>
        </div>
    )
}

export default Login