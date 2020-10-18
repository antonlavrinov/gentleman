import React from 'react';
// import Slider from '../components/Slider';
// import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import shirts from '../assets/shirts.jpg';
import shoes from '../assets/shoes.jpg';
import accessories from '../assets/accessories.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {ReactComponent as SliderPrev} from '../assets/slider-prev.svg';
import {ReactComponent as SliderNext} from '../assets/slider-next.svg';
import {Link} from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Autoplay]);
const HomePage = () => {


    return (
        <div className="homepage">

            <Row>
                <Col>
                    <div className="homepage__slider">
                        <Swiper
                            className="homepage__slider-wrapper"
                            navigation={{
                                nextEl: '.homepage__slider-btn-next',
                                prevEl: '.homepage__slider-btn-prev'
                            }}
                            speed={500}
                            slidesPerView={1}
                            loop
                
                            autoplay={{
                                delay: 5000
                            }}
                            >
                                <SwiperSlide>
                                    <Link to="/search/Brian%20Dales" style={{background: `url(${banner2})`, backgroundSize: 'cover'}} className="homepage__slider-image"></Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/catalog/clothing/coats" style={{background: `url(${banner3})`, backgroundSize: 'cover'}} className="homepage__slider-image"></Link>
                                </SwiperSlide>
                                {/* /search/Brian%20Dales */}
                        </Swiper>
                        <div className="homepage__slider-buttons">
                           
                            <div className="homepage__slider-btn-prev"><SliderPrev/></div>
                            <div className="homepage__slider-btn-next"><SliderNext/></div>
                        </div>
                        
                    </div>
                </Col>
                {/* <Col lg={4}>
                </Col> */}
            </Row>
            
            <div className="homepage__previews">
                <Link to="/catalog/clothing/shirts" style={{background: `url(${shirts})`, backgroundSize: 'cover'}} className="homepage__previews-block">

                </Link>
                <Link to="/catalog/shoes" style={{background: `url(${shoes})`, backgroundSize: 'cover'}} className="homepage__previews-block">
                    
                </Link>
                <Link to="/catalog/accessories" style={{background: `url(${accessories})`, backgroundSize: 'cover'}} className="homepage__previews-block">
                
                </Link>
            </div>

        </div>
    )
}

export default HomePage;