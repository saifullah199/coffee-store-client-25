import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='text-center m-6'>
            <Link className='mr-2' to="/">Home</Link>
            <Link className='mr-2' to="addCoffee">Add Coffee</Link>
            <Link className='mr-2' to="signin">Sign In</Link>
            <Link className='mr-2' to="signup">Sign Up</Link>
            <Link className='mr-2' to="users">Users</Link>
        </div>
    );
};

export default Header;