


import './cartItem.scss';

function CartItem({item, changeAmountFromCart, deleteCurrentItem}) {


    const {name, amount, price, id} = item
    return ( 
        <li className='cart-list-item'>
            <div className="cart-item-name">{name}</div>

            <div className="cart-item-amount_info">
                <button onClick={() => changeAmountFromCart(id, 'decrease')} className='change-value amount-dec'>-</button>
                <div className="cart-item-amount">{amount}</div>
                <button onClick={() => changeAmountFromCart(id, 'increase')} className='change-value amount-inc'>+</button>

            </div>

            <div className="cart-item-price">{price * amount + '$'}</div>


            <div onClick={() => deleteCurrentItem(id)} className="cart-item-delete">🗑️</div>
        </li>
    )
}


export default CartItem;
