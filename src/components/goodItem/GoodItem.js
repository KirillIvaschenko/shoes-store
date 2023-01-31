
import './goodItem.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
function GoodItem({item, addToCartItem}) {

    const {img, name, price, id} = item;
    return (
        <li className="list-good-item">
            <div className="wrapper-good-item">
                <img src={img} alt={name} className="good-img"/>
                <div className='good-information'>
                    <p className="good-title">{name}</p>
                    <h2 className="good-price">{price}$</h2>
                    <button onClick={() => addToCartItem(id)} type="button" className="add-to-cart btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </li>
    )
}

export default GoodItem;