import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderService from '~/service/SliderService';
import { baseURL } from '~/utils/Contant';
import style from './Slider.module.scss';

const cx = classNames.bind(style);
function Slider() {
   const [data, setData] = useState([]);
   useEffect(() => {
      const fethApi = async () => {
         const result = await sliderService.getAll('');
         setData(result.data);
      };
      fethApi();
   }, []);
   return (
      <div className={`${cx('slider')} haha`}>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={cx('mySwiper')}
         >
            {data &&
               data.map((item, index) => {
                  return (
                     <SwiperSlide
                        key={index}
                        //   style={item.data.props.style}
                        className={cx('swiper-slide-show')}
                     >
                        <div className={cx('slide-content')}>
                           {/* <div className={cx("slide-left")}>
                  <h2 className={cx("slide-heading")}>{item.title}</h2>
                  <p className={cx("slide-desc")}>{item.description}</p>
                  <div className={cx("slide-link")}></div>
                </div> */}
                           <div className={cx('slide-right')}>
                              <img
                                 src={`${baseURL}/${item.image_path}`}
                                 alt=""
                              />
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
         </Swiper>
      </div>
   );
}

export default Slider;
