import DoneIcon from '@mui/icons-material/Done';
import '../Services/Services.css'
import ContentService from './ContentService';
import WebService from './WebService';
const Services = () =>{
return(
      <div className='totalservices' id="service">
         <h5>What i offer</h5>
         <h2>Services</h2>
         <div className='allservices'>
            <div className='oneService'>
               <div>
                    <h4>UI/Ux Design</h4>
                  </div>
                     <div className='service'>
                        <DoneIcon />
                        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” </p>
                     </div>
                     <div className='service'>
                        <DoneIcon />
                        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” </p>
                     </div>
                     <div className='service'>
                        <DoneIcon />
                        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” </p>
                     </div>
                     <div className='service'>
                        <DoneIcon />
                        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” </p>
                     </div>
                     <div className='service'>
                        <DoneIcon />
                        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” </p>
                     </div>
                </div>
                <div>
            <WebService />
            </div>
            <div>
            <ContentService />
            </div>
            </div>
      </div>
)
}
export default Services;