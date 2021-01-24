import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Eye } from '../assets/eye-icon.svg';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    position: relative;
    height: 380px;
    width: 100%;
    background-size: cover !important;
    transition: all 0.4s ease;
    background-position: center !important;
    @media only screen and (max-width: 1200px) {
        height: 320px;
    }
    @media only screen and (max-width: 758px) {
        height: 55vw;
    }
    ${props => props.product && `
        background: url(${props.product.imageLinks[0]});
        :hover {
            background: url(${props.product.imageLinks[1]});
        }
    `}
`


const ProductItem = ({ product }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const imgs = [];
        product.imageLinks.forEach((image) => {
            imgs.push(image);
        })

        cacheImages(imgs);
    }, [product])

    const cacheImages = (imgs) => {
        imgs.forEach(src => {
            new Promise((resolve, reject) => {
                const img = new Image();

                img.src = src;
                img.onLoad = resolve();
                img.onError = reject();
            })
        })

        setIsLoading(false)
    }

    return (

        <div className="product-item">
            <Link to={`/product/${product.id}`}>

                {isLoading ? (
                    <div style={{ background: '#dedede' }}></div>
                ) : (
                        <ImageWrapper product={product}>

                        </ImageWrapper>
                    )}


                <div className="product-item__info">
                    <div className="product-item__info-wrapper">
                        <div className="product-item__price">
                            {`${product.price} ₽`}
                        </div>
                        <div className="product-item__name">
                            {product.productName}
                        </div>
                    </div>

                    <div className="product-item__button">
                        <Eye /> Подробнее
                    </div>
                </div>



            </Link>
        </div>


    )
}

export default ProductItem;