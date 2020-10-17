import React from 'react'
import CartItem from '../components/CartItem'
import {selectCartItems, selectCartItemsCount, selectCartTotal} from '../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomButton from '../components/CustomButton';


const CartPage = ({cartItems, cartCount, cartTotal}) => {
    return (
        <div className="cart-page">
            <div className="cart-page__section-title">Корзина</div>
            {cartItems.length > 0 ? (
                <div className="cart-page__wrapper">
                    <Row>
                        <Col lg={8}>
                            <div className="cart-page__item-table">
                                <div className="cart-page__count">Товаров: {cartCount}</div>
                                <div className="cart-page__item-quantity">Количество</div>
                                <div className="cart-page__item-price">Цена</div>

                            </div>
                            
                            <div className="cart-page__items">
                                {cartItems.map((item, idx) => {
                                    return (
                                        <CartItem key={item.id} item={item}/>
                                    )
                                })}
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="cart-page__summary">
                                <div className="cart-page__summary-main">
                                    Итого <span>{cartTotal} ₽</span>
                                </div>
                                <div className="cart-page__summary-footer">
                                    <CustomButton>Оформить заказ</CustomButton>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            ) : (
                <div className="cart-page__message">
                    В корзине пока ничего нет
                </div>
            )} 
        </div>
    )
}



const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartCount: selectCartItemsCount(state),
    cartTotal: selectCartTotal(state)
});

export default connect(mapStateToProps)(CartPage);
