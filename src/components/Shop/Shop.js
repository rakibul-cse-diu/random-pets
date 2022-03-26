import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

import './Shop.css';

const Shop = () => {
    const [Pets, setPets] = useState([]);
    const [Carts, setCarts] = useState([]);
    const [SelectedPet, setSelecetdPet] = useState({});

    // Load Data 
    useEffect(() => {
        fetch("pets.json")
            .then(res => res.json())
            .then(data => setPets(data))
    }, [])

    // Handle add to cart button 
    const handleAddToCart = id => {
        let newCart = [];
        const addedItem = Carts.find(item => item.id === id);
        if (addedItem) {
            newCart = [...Carts];
        }
        else {
            if (Carts.length < 4) {
                const selectedItems = Pets.find(item => item.id === id);
                newCart = [...Carts, selectedItems];
            } else {
                newCart = [...Carts];
                alert("You can select only 4 items");
            }
        }
        setCarts(newCart);
    }

    // handle choose pet
    const handleChoosePet = () => {
        const randomNum = Math.floor(Math.random() * 4)
        const NewselectedPet = Carts[randomNum];
        setSelecetdPet(NewselectedPet);
    }

    // Handle Reset button 
    const handleReset = () => {
        setCarts([]);
        setSelecetdPet({});
    }

    return (
        <div className='d-flex flex-column-reverse flex-lg-row justify-content-center align-items-start mb-5 ms-2 me-2'>
            <div className='products-container d-flex flex-column justify-content-center align-items-center'>
                {
                    !SelectedPet.id ?
                        <div></div> :
                        <div className='random-selected-pet p-5 bg-success bg-opacity-50 w-75 d-flex flex-column align-items-center'>
                            <img className='w-50 mb-3' src={SelectedPet.img} alt="" />
                            <h5>Name: {SelectedPet.name}</h5>
                            <h5>price: ${SelectedPet.price}</h5>
                            <br />
                            <button className='btn btn-primary'>Get Now</button>
                        </div>
                }
                <div className='row g-4 m-0 p-0 mb-5'>
                    {
                        Pets.map(products => <Products pet={products} key={products.id} handleAddToCart={handleAddToCart}></Products>)
                    }
                </div>
            </div>
            <div className='cart-conatiner col-12 col-lg-4 bg-warning bg-opacity-25 sticky-lg-top mt-4 mb-5'>
                <Cart items={Carts} handleReset={handleReset} handleChoosePet={handleChoosePet} ></Cart>
            </div>
        </div>
    );
};

export default Shop;