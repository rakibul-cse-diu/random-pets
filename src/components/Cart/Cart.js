import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Cart.css';

const Cart = (props) => {
    const items = props.items;

    return (
        <div className='d-flex flex-column align-items-center p-3'>
            {
                items.map(item => <div key={item.id} className='cart-item d-flex align-items-center p-2'>
                    <img src={item.img} alt="" height={50} width={50} />
                    <h6 className='text-center ms-4'>{item.name}</h6>
                </div>)
            }
        </div>
    );
};

export default Cart;