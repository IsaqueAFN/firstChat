import Chat from '../components/Chat'
import Contacts from '../components/Contacts'
import Login from '../components/Login'
import './Home.css'
import { useContext, useRef } from 'react'
import { FuncSendMSG } from '../context/SendMSGContext'

function Home(){

    const refHome = useRef(null)
    const { start } = useContext(FuncSendMSG)

    function DeleteLogin(){
        refHome.current.style.filter = 'blur(0px)'
        return (<></>)
    }

    return(
        <>
            {!start ? (
                <div className='storeLogin'>
                    <Login/>
                </div>
            ) : DeleteLogin()}

            <div className='Home' ref={refHome}>

                <div className='Contacts'>
                    <Contacts/>
                </div>
                <div className='division'>
                    <div></div>
                </div>
                <div className='Chat'>
                    <Chat/>
                </div>
            </div>
        </>
    )
}

export default Home