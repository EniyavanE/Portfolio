import cv from '../../Images/Resume.pdf';
const CTA =()=>{
return(
    <div className="header cta">
    <a href={cv} download className='btn'>Download CV</a>
    <a className='btn'href='#contact'>Lets talk</a>
    </div>
);
}
export default CTA;