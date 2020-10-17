import React, {useState} from 'react';
import {connect} from 'react-redux';
import {selectProductById} from '../redux/products/products.selectors';
import CustomButton from '../components/CustomButton';
import {addItem} from '../redux/cart/cart.actions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SwiperCore, { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import {Redirect} from 'react-router';

SwiperCore.use([Thumbs]);

const ProductPage = ({match, product, addItem}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {product ? (
                <div className="product__wrapper">
                    <Row>
                        <Col lg={6}>
                            <div className="product__slider">
                                <Swiper 
                                    className="product__slider-thumbs"
                                    slidesPerView={4}
                                    onSwiper={setThumbsSwiper}
                                    direction="vertical"
                                    noSwiping={false}
                                    
                                    >
                                        {product.imageLinks.map((image, idx) => {
                                            return (
                                                <SwiperSlide key={idx} className="product__thumb-slide">
                                                    <div className="product__thumb-image" style={{backgroundImage: `url(${image})`}}/>
                                                </SwiperSlide>
                                            )
                                        })}


                                </Swiper>
                                <Swiper
                                    className="product__slider-wrapper"
                                    thumbs={{ swiper: thumbsSwiper }}
                                    slidesPerView={1}
                                    >
                                        {product.imageLinks.map((image, idx) => {
                                            return (
                                                <SwiperSlide key={idx}>
                                                    <img className="product__image" src={image} alt={`product${idx}`}/>
                                                </SwiperSlide>
                                            )
                                        })}


                                </Swiper>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="product__info">
                                <div className="product__name">{product.productName}</div>
                                <div className="product__descr">{product.description}</div>
                                <div className="product__price">{product.price} ₽</div>
                                <CustomButton additionalClass="product__button" onClick={() => addItem(product)}>Добавить в корзину</CustomButton>
                                <div className="product__additional-info">
                                    <div className="product__info-title">
                                        О товаре
                                    </div>
                                    {product.material && (
                                        <div className="product__info-item">
                                            <span>Состав:</span> {product.material.join(', ')}
                                        </div>
                                    )}
                                    {product.color && (
                                        <div className="product__info-item">
                                            <span>Цвет:</span> {product.color.join(', ')}
                                        </div>
                                    )}
                                    {product.season && (
                                        <div className="product__info-item">
                                            <span>Сезон:</span> {product.season}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </Col>
                    </Row>




                </div>
            ) : (
                <Redirect to="/"/>
            )}
        
        
        </>
        
    )
}

const mapStateToProps = (state, ownProps) => ({
    product: selectProductById(ownProps.match.params.productId)(state)
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);