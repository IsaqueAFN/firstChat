import './Contacts.css'
import GroupWhite from '../Images/GroupWhite.png'

function Contacts(){
    return(
        <div className='divContacts'>
            <div className='divContactsH1'>
                <h1>Contacts</h1>
            </div>
            <div className='divGlobalChat'>
                <img src={GroupWhite}/>
                <p>Global Chat</p>
            </div>
        </div>
    )
}

export default Contacts