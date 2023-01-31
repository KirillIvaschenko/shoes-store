import React, { useState } from 'react';




import basket from '../../images/basket.png'
import ModalCart from '../modalCart/ModalCart';
import './cartIcon.scss';

function CartIcon({totalPrice, cartGoods, changeAmountFromCart, deleteCurrentItem}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div tabIndex='1'>
            {show ? <ModalCart totalPrice={totalPrice} deleteCurrentItem={deleteCurrentItem} changeAmountFromCart={changeAmountFromCart} show={show} handleClose={handleClose} cartGoods={cartGoods}/> : null}
            <div onClick={handleShow} className='circle-bg-cart'>
                <img className='cart-img' src={basket} alt="basket" />
                <div className="amount-cart-items">{cartGoods.reduce((res, curr) => res+=curr.amount,0)}</div>
            </div>
        </div>
    )
}






export default CartIcon;