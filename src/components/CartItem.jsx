import React from 'react'
import { addItem, removeItem, clearItemFromCart } from '../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ReactComponent as Trash } from '../assets/trash-icon.svg';

const CartItem = ({ history, item, addItem, removeItem, clearItemFromCart }) => {

    return (
        <div className="cart-item">
            <div className="cart-item__image-and-name">
                <div className="cart-item__image" style={{ background: `url(${item.imageLinks[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className="cart-item__name" onClick={() => history.push(`/product/${item.id}`)}>
                    {item.productName}
                </div>
            </div>

            <div className="cart-item__quantity">
                <div className="cart-item__quantity-less" onClick={() => removeItem(item)}>-</div>
                <div className="cart-item__quantity-count">{item.quantity}</div>
                <div className="cart-item__quantity-more" onClick={() => addItem(item)}>+</div>
            </div>
            <div className="cart-item__price">{item.price} ₽</div>
            <div className="cart-item__remove" onClick={() => clearItemFromCart(item)}><Trash />Удалить</div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})



export default withRouter(connect(null, mapDispatchToProps)(CartItem)); 