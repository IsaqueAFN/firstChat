import { createContext, useState } from "react";
import Home from "../pages/Home";
import SendMSGContext from "./SendMSGContext";

export const LoginInfo = createContext(null)

function LoginContext(){
    const [loginName, setLoginName] = useState('')
    const loginInformations = {
        loginName,
        setLoginName
    }
    return(
        <LoginInfo.Provider value={loginInformations}>
            <SendMSGContext>
                <Home/>
            </SendMSGContext>
        </LoginInfo.Provider> 
    )
}

export default LoginContext