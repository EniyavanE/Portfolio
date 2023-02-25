import CTA from "./CTA";
import './Home.css'
import myphoto from '../../Images/Man.jpg'
import Socialmedia from "./Socialmedia";

const Home = ()=>{
return(
    <header>
     <div className="header myprofile" id="">
       <h5>Hello I'm</h5>
       <h2>Eniyavan</h2>
       <h5>Fullstack developer</h5>
       <CTA />
       <Socialmedia />
       <div >
       <img src={myphoto} alt="My Photo"  className="me"/>
       </div>
     </div>
    </header>     
    )
}
export default Home;