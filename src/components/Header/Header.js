import React from 'react';
import logo from '../../images/21378450.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='bg-dark d-flex align-items-end'>
            <img src={logo} alt="" height={70} />
            <h3 className='text-white'>Random Pets</h3>
        </div>
    );
};

export default Header;