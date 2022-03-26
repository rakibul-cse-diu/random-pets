import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer bg-dark d-flex justify-content-center align-items-center'>
            <span className='text-white'>All rights reserve &copy;random pets.</span>
        </footer>
    );
};

export default Footer;