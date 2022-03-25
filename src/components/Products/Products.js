import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Products.css';

const Products = (props) => {
    // console.log(props)
    const handleAddToCart = props.handleAddToCart;
    const { img, name, price, id } = props.pet;
    return (
        <div className='col-12 col-lg-4'>
            <div className='product'>
                <div>
                    <img className='m-auto w-100' src={img} alt="" height={280} />
                    <h4>Name: {name}</h4>
                    <p>Price: ${price}</p>
                </div>
                <button className='btn btn-warning fs-5' onClick={() => handleAddToCart(id)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Products;