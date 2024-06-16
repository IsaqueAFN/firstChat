import './ChatHeader.css'
import CallWhite from '../Images/CallWhite.png'
import ThreePointsWhite from '../Images/ThreePointsWhite.png'
import VideoCallWhite from '../Images/VideoCallWhite.png'
import PersonWhite from '../Images/PersonWhite.png'

function ChatHeader({ image, conctact }){
    return(
        <div className="chatHeader">
            <img className='contactImage' src={image ? image : PersonWhite}/>
            <h1>{conctact ? conctact : 'Unknown'}</h1>
            <div className='contactAction'>
                <div>
                    <img src={VideoCallWhite}/>
                </div>
                <div>
                    <img src={CallWhite}/>
                </div>
                <div>
                    <img src={ThreePointsWhite}/>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader