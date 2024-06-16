import './ContactAcount.css'
import PersonWhite from '../Images/PersonWhite.png'

function ContactAcount(image, contact){
    <div className='divContactAcount'>
        <img src={image ? image : PersonWhite}/>
        <h1>{contact ? contact : 'Unknown'}</h1>
    </div>
}

export default ContactAcount