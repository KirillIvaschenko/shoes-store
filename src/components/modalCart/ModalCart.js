



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartItem from '../cartItem/CartItem';

import './modalCart.scss';
const ModalCart = ({totalPrice, show, handleClose, cartGoods, deleteCurrentItem, changeAmountFromCart}) => {
    

    return (
        <>
        

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Your Purchases</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="modal-body-list">
                    {
                    cartGoods.map((good, i) => <CartItem key={i} item={good} changeAmountFromCart={changeAmountFromCart} deleteCurrentItem={deleteCurrentItem}/>)
                    }
                </ul>
            </Modal.Body>
            <Modal.Footer>
            
            <h4>{totalPrice}$</h4>
            <Button variant="primary" onClick={handleClose}>
                Order
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalCart;