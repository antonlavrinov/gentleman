import React from 'react'
import {connect} from 'react-redux';
import { selectCartVisible, selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';
import CustomButton from './CustomButton';
import { CSSTransition } from 'react-transition-group';
import {toggleCartVisible} from '../redux/cart/cart.actions';
import {ReactComponent as ArrowIcon} from '../assets/arrow-icon.svg';
import {withRouter} from 'react-router';

const CartPopup = ({cartVisible, toggleCartVisible, cartItems, cartTotal, history}) => {
    const cartVisibility = cartVisible ? '' : 'cart-popup_disabled';
    return (
        <div className="cart-popup__wrapper">
            <div className={`cart-popup ${cartVisibility}`}>
                <div className="cart-popup__exit" onClick={() => toggleCartVisible()}>
                    <div className="cart-popup__exit-icon">
                        <ArrowIcon/>
                    </div>
                    <div className="cart-popup__exit-title">
                        Продолжить покупки
                    </div>
                </div>
                <div className="cart-popup__block">
                    <div className="cart-popup__cart-items">
                        {cartItems.length > 0 ? (
                            <>
                                {cartItems.map((item, idx) => {
                                    return (
                                        <div key={idx} className="cart-popup__cart-item">
                                            <div className="cart-popup__item-img" style={{background: `url(${item.imageLinks[0]})`, 
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundPosition: 'center'}}>
                                            </div>
                                            <div className="cart-popup__item-info">
                                                <div className="cart-popup__item-name">{item.productName}</div>
                                                <div className="cart-popup__item-count">{item.quantity} X <span>{item.price} р.</span></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>

                        ) : (
                            <div className="cart-popup__empty">В корзине пока ничего нет</div>
                        )}
                    </div>


                    <div className="cart-popup__footer">
                        {cartItems.length > 0 && (
                            <>
                                <div className="cart-popup__summary">
                                    <div className="cart-popup__summary-text">Итого сумма заказа:</div>
                                    <div className="cart-popup__summary-count">{cartTotal} руб.</div>
                                </div>
                                <CustomButton additionalClass="cart-popup__button cart-popup__button_cart" onClick={() => {history.push('/cart'); toggleCartVisible()}}>Оформить заказ</CustomButton>
                            </>
                           
                        )}

                        
                    </div>
                    
                </div>

            </div>
            <CSSTransition in={cartVisible} timeout={300} classNames="overlay" unmountOnExit onClick={() => toggleCartVisible()} >
                <div className="overlay"></div>
            </CSSTransition>

        </div>

    )
}

const mapStateToProps = (state) => ({
    cartVisible: selectCartVisible(state),
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
})


const mapDispatchToProps = dispatch => ({
    toggleCartVisible: () => dispatch(toggleCartVisible())  
  })





export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPopup));
