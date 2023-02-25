import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../Footer/Footer.css"
const Footer = () =>{
   return(
    <div className='bottom'>
        <div className='Containerdetails'>
        <h2>EGATOR</h2>
        </div>
        <div className='Containerdetails location'>
          <div>
            <a href='#'> 
            Home </a>
          </div>
          <div>
            <a href='#about'>
            About
            </a>
          </div>
          <div>
            <a href='#skills'>
            Experience
            </a>
          </div>
          <div>
            <a href='#service'>
            Services
            </a>
          </div>
          <div>
            <a href='#testimony'>
            Testimonials
            </a>
          </div>
          <div>
            <a href='#contact'>
            Contacts
            </a>
          </div>
        </div>
        <div className='Containerdetails icons'>
        <InstagramIcon />
       <YouTubeIcon />
       <TwitterIcon />
       <FacebookIcon />
        </div>
        <div className='Containerdetails'>
            <h5>EGATOR Tutorials. All rights reserved</h5>
        </div>
    </div>
   )
}
export default Footer;