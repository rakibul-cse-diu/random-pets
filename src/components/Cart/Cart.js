import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Cart.css';

const Cart = (props) => {
    const items = props.items;
    const handleChoosePet = props.handleChoosePet;
    const handleReset = props.handleReset;
    const handleSingleItem = props.handleSingleItem;

    return (
        <div className='d-flex flex-column ps-5 pe-5'>
            <h3 className='mt-3 text-center'>Selected Items</h3>
            <div className='d-flex flex-column align-items-center p-3'>
                {
                    items.map(item => <div key={item.id} className='cart-item d-flex align-items-center p-2'>
                        <img src={item.img} alt="" height={50} width={50} />
                        <h6 className='text-center ms-4 me-4'>{item.name}</h6>
                        <button className='btn delete-item-btn' onClick={() => handleSingleItem(item.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                    </div>)
                }
            </div>

            <button className='btn btn-success' onClick={handleChoosePet}>Choose 1 for me</button>
            <br />
            <button className='btn btn-danger' onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Cart;