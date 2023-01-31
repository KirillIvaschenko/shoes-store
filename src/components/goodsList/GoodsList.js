import GoodItem from "../goodItem/GoodItem"

import './goodsList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
function GoodsList({goods, addToCartItem}) {
    return (
        <ul className="goods-list">
            {
                goods.map((item, i) => <GoodItem key={i} item={item} addToCartItem={addToCartItem}/>)
            }
        </ul>
    )
}

export default GoodsList