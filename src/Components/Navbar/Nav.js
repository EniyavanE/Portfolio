import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import '../Navbar/Nav.css'
const Nav = ()=>{
    return(
        <div className='navbar container'>
           <a href='#'> <HomeIcon/> </a>
          <a href='#about'>  <PersonIcon/>  </a>
          <a href='#skills'>  <LaptopIcon/> </a>
          <a href="#service">  <PsychologyIcon/>  </a>
           <a href='#contact'> <SpeakerNotesIcon/> </a>
        </div>
    ) 
}
export default Nav;