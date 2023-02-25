import VerifiedIcon from '@mui/icons-material/Verified';
import '../Experience/Experience.css'
const Experience = () =>{
    return(
        <div className='knownlanguages' id="skills">
            <h5>What Skills i have</h5>
            <h5>My Experience</h5>
            <div className='languages'>
                <div className='frontend'>
                  <div style={{width:`100%`,padding:0}}>
                  <h5>Frontend Developer</h5>
                  </div>  
                  
                    <div className='onelang' >
                        <div >
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>HTML</bold>
                       <small>Experienced</small>
                       </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>CSS</bold>
                       <small>Experienced</small>
                       </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                     </div>
                     <div className='langexp'>
                       <bold>Javascript</bold>
                       <small>Experienced</small>
                       </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>Bootstrap</bold>
                       <small>Experienced</small>
                    </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                     </div>  
                     <div className='langexp'>
                       <bold>Tailwind</bold>
                       <small>Experienced</small>
                    </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>React</bold>
                       <small>Experienced</small>
                       </div>
                    </div>
                    
                </div>
                <div className='backend'>
                <div style={{width:`100%`,padding:0}}>
                  <h5>Backend Developer</h5>
                  </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>Node JS</bold>
                       <small>Experienced</small>
                    </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                      <bold>MongoDB</bold>
                       <small>Experienced</small>
                    </div>
                    </div>
                    <div className='onelang' >
                     <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>PHP</bold>
                       <small>Experienced</small>
                    </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>MYSQL</bold>
                       <small>Experienced</small>
                    </div>
                    </div>
                    <div className='onelang' >
                    <div>
                       <VerifiedIcon />
                       </div>
                       <div className='langexp'>
                       <bold>Python</bold>
                       <small>Experienced</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;