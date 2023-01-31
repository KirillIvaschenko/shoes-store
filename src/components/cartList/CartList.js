import CartItem from "../cartItem/CartItem";

import './cartList.scss';

function CartList({cart, changeAmountFromCart, deleteCurrentItem}) {

    return (
        <ul className="cart-list">
            {
                cart.map((item, i) => <CartItem key={i} item={item} changeAmountFromCart={changeAmountFromCart} deleteCurrentItem={deleteCurrentItem}/>)
            }
        </ul>
    )
}


export default CartList;