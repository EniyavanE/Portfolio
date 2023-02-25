import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Socialmedia = ()=>{
return(
    <div className='header socialicons'>
      <a href='https://www.youtube.com/'><YouTubeIcon /></a>
    <a href='https://www.instagram.com/'>  <InstagramIcon /></a>
     <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'>  <TwitterIcon /></a>
       <a href='https://www.facebook.com/'><FacebookIcon /></a>
    </div>
)
}
export default Socialmedia;