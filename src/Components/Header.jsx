import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <Link className='mr-2' to="/">Home</Link>
            <Link to="addCoffee">Add Coffee</Link>
        </div>
    );
};

export default Header;