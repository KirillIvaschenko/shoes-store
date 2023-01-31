
import 'bootstrap/dist/css/bootstrap.min.css';
function PriceInformation({totalPrice, clearCart}) {

    
    return (
        <>
            <h3>Total price: {totalPrice}$</h3>

            <button onClick={clearCart} className="btn btn-warning">Clear Cart</button>
        </>
    )
}


export default PriceInformation;