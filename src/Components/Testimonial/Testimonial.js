import '../Testimonial/Testimonial.css'
import photo from '../../Images/Man.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonial = ()=>{
    const data = [
        {
            photos:photo,
            name:'Earnest Archiever',
            review:'erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
        },{
            photos:photo,
            name:'Earnest Archiever',
            review:'erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
        },{
            photos:photo,
            name:'Earnest Archiever',
            review:'erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
        },{
            photos:photo,
            name:'Earnest Archiever',
            review:'erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
        },
    ]
       return(<div className='alltestcontainer' id="testimony">
          <h5>Review from clients</h5>
          <h2>Testimonials</h2>
          <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="totalcontainers">
         {data.map(({photos,name,review},index)=>{
                return(
                    <SwiperSlide  key={index} className='testcontainer'>
                <div>
                    <img src={photos} alt="Photo" />
                </div>
                <div>
                <h5>{name}</h5>
                <small>
                     {review}
                </small>
                </div>
            </SwiperSlide>
                )
            })}
          
          
       </Swiper>
       </div>)
}
export default Testimonial;