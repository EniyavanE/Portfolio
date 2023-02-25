import "../Contact/Contact.css"
import EmailIcon from '@mui/icons-material/Email';
import Message from "./Message";
const Contact = ()=>{
    return(
        <div id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="contactdetails">
                    <div className="socialmedia" >
                      <div className="onemedia">
                    <div>
                     <EmailIcon />
                    </div>
                    <div className="email">
                        <b>Email</b>
                        <small>support@gmail.com</small>
                    </div>
                    <div>
                        Send a message
                    </div>
                    </div>
                    <div className="onemedia">
                    <div>
                     <EmailIcon />
                    </div>
                    <div className="email">
                        <b>Email</b>
                        <small>support@gmail.com</small>
                    </div>
                    <div>
                        Send a message
                    </div>
                    </div>
                    <div className="onemedia">
                    <div>
                     <EmailIcon />
                    </div>
                    <div className="email">
                        <b>Email</b>
                        <small>support@gmail.com</small>
                    </div>
                    <div >
                        Send a message
                    </div>
                    </div>
                </div>
                
                <div>
                    <Message />
                </div>
            </div>
        </div>
    )
}
export default Contact;