import "../Contact/Contact.css"
const Message = ()=>{
      return(
      <div className="message">
        <input type="text" placeholder="Your FullName" className="messagedetails" style={{width:`300px`,height:`40px`}}/>
        <input type="email" placeholder="Your Email" className="messagedetails" style={{width:`300px`,height:`40px`}}/>
        <textarea rows={7} cols={12} placeholder="Your Passage" className="messagedetails"/>
        <input type="button" value="Send Message" className="btn"/>
      </div>)
}
export default Message;