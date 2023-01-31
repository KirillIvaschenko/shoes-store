import React, {useState, useEffect} from 'react';

import GoodsList from '../goodsList/GoodsList';
import CartList from '../cartList/CartList';


import nikeImg from '../../images/nike.jpg';
import adidasImg from '../../images/adidas.jpg';
import pumaImg from '../../images/puma.jpg';

import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceInformation from '../priceInformation/PriceInformation';
import CartIcon from '../cartIcon/CartIcon';

function App() {

    const [goods, setGoods] = useState([
        {id: 1, name: 'Nike Air',img: nikeImg, price: 190, amount: 0},
        {id: 2, name: 'Adidas Grand',img: adidasImg, price: 220, amount: 0},
        {id: 3, name: 'Puma Mirage',img: pumaImg, price: 80, amount: 0},

    ]);
    
    useEffect( () => {
        const arr = goods.filter(good => good.amount);

        localStorage.setItem('cart', JSON.stringify(arr));
    },[goods])

    const addToCartItem = (id) => {

        const updatedGoods = goods.map(good => {
            if(good.id === id && good.amount < 25) {
                good.amount +=1;
            }
            return good;
        })
        setGoods(updatedGoods);
    }


    const changeAmountFromCart = (id, type) => {
        const updatedGoodsAmount = goods.map(good =>  {
            if(good.id === id && type ==='increase' && good.amount < 25) { //sneakers`s maximum is 25
                good.amount +=1;
            }else if(good.id === id && type ==='decrease' && good.amount > 1) {
                good.amount -=1;
            }
            return good;
        })
        setGoods(updatedGoodsAmount);
    }


    const clearCart = () => {
        const clearedCart = goods.map( good => {
            if(good.amount) {
                good.amount = 0;
            }
            return good
        })

        setGoods(clearedCart);

    }

    const deleteCurrentItem = (id) => {
        const updatedArr = goods.map(good => {
            if(good.id === id) {
                good.amount = 0;
            }
            return good;
        })

        setGoods(updatedArr);
    }
    const totalPrice = goods.reduce((result, curr) => result+= curr.amount * curr.price ,0)
    const cartGoods = goods.filter(item=> item.amount > 0);

    return (
        <div className="app">
            <header className='header_cart'>
                <CartIcon totalPrice={totalPrice} cartGoods={cartGoods} changeAmountFromCart={changeAmountFromCart}
                deleteCurrentItem={deleteCurrentItem}/>
            </header>

            <div className="goods-block">
                
                <GoodsList goods={goods} addToCartItem={addToCartItem}/>   
            </div>

            <div className="price-and-clear-block">
                <PriceInformation totalPrice={totalPrice} clearCart={clearCart}/>
            </div>

            <div className="cart-block">
                <CartList  cart={cartGoods} changeAmountFromCart={changeAmountFromCart} deleteCurrentItem={deleteCurrentItem}/>
            </div>
            
        </div>
    )

    

}


export default App;
