import myphoto from '../../Images/Man.jpg'
import GroupIcon from '@mui/icons-material/Group';
import '../About/About.css'
const About = () =>{
    return(
        <div className='abouts' id="about">
            <h5>Get To Know</h5>
            <h3>About Me</h3>
            
            <div className='aboutdetails'>
                <div className='details profile' >
                   <img src={myphoto} alt="My photo" className='slidingpic'/>
                </div>    
            <div className='details aboutexperience'>
                <div className='workexperience'>
               <div className='experience details'> 
               <GroupIcon/>
               <span>Experience</span>
               <small>3+ Years working</small>
               </div>
               <div className='experience details'> 
               <GroupIcon/>
               <span>Experience</span>
               <small>3+ Years working</small>
               </div>
               <div className='experience details'> 
               <GroupIcon/>
               <span>Experience</span>
               <small>3+ Years working</small>
               </div>
               </div>
            
            <p>imply put, a paragraph is a collection of sentences all related to a central topic, 
                idea, or theme. Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression,
                 and they also help readers process those thoughts effortlessly. Imagine how much harder reading 
                 and writing would be if everything was just one long block of text
            </p>
           <a className='btn' href='#contact'>Lets Talk</a>
           </div>
           </div>
        </div>
    )
}

export default About;