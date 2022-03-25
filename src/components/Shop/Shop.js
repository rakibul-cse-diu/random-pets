import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';

const Shop = () => {
    const [Pets, setPets] = useState([]);

    // Load Data 
    useEffect(() => {
        fetch("pets.json")
            .then(res => res.json())
            .then(data => setPets(data))
    }, [])
    return (
        <div className='row g-3 p-0 m-0'>
            <div className='col-12 col-lg-8'>
                <div className='products-container row g-4'>
                    {
                        Pets.map(products => <Products pet={products} key={products.id}></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;